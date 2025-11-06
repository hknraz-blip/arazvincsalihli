import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createFile, deleteFile, getFileById, getUserFiles } from "./db";
import { storagePut } from "./storage";
import { randomBytes } from "crypto";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    upload: protectedProcedure
      .input(
        z.object({
          filename: z.string(),
          content: z.string(), // base64 encoded
          mimeType: z.string(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        // Decode base64 content
        const buffer = Buffer.from(input.content, "base64");
        const fileSize = buffer.length;

        // Generate unique file key
        const randomSuffix = randomBytes(8).toString("hex");
        const fileKey = `user-${ctx.user.id}/files/${input.filename}-${randomSuffix}`;

        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.mimeType);

        // Save metadata to database
        await createFile({
          userId: ctx.user.id,
          filename: input.filename,
          fileKey,
          url,
          mimeType: input.mimeType,
          fileSize,
        });

        return { url, fileKey };
      }),

    list: protectedProcedure.query(async ({ ctx }) => {
      return await getUserFiles(ctx.user.id);
    }),

    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const file = await getFileById(input.fileId);
        if (!file) {
          throw new Error("File not found");
        }
        if (file.userId !== ctx.user.id) {
          throw new Error("Unauthorized");
        }
        await deleteFile(input.fileId);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
