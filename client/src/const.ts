export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = "Araz Vinç Salihli";
export const APP_LOGO = "/araz-vinc-logo.png";

export const getLoginUrl = () => {
  const oauthPortalUrl = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env.VITE_OAUTH_PORTAL_URL : undefined;
  const appId = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env.VITE_APP_ID : undefined;
  const redirectUri = typeof window !== "undefined" ? window.location.origin : "";
  const state = typeof btoa !== "undefined" ? btoa(redirectUri) : "";

  // Ortam değişkenleri yoksa login URL’i hiç üretme, ana sayfaya yönlendir:
  if (!oauthPortalUrl || !appId) {
    return "/";
  }

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
