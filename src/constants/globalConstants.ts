export const CONSTANTS = {
  isDev: process.env.NODE_ENV === "development",
  projectName: "Yul-Yort",
  shortProjectName: "YY",
  tokenCookieKey: "access_token",
  themeKey: "yy-theme",
  defaultRoute: "home",
  numberPattern: /^[1-9]\d*(\d+)?$/i,
  publicUrl: process.env.PUBLIC_URL || "/",
  devBaseUrl: "http://localhost:9000/",
  prodBaseUrl: "https://api.yul-yort.ru",
};
