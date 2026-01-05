import { describe, expect, it } from "vitest";

// Basic health check to ensure the Vitest suite runs without failing when no other tests exist.
describe("health check", () => {
  it("runs the test runner", () => {
    expect(true).toBe(true);
  });
});
