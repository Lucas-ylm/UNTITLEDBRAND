export const env = {
  BASE_PATH: process.env.BASE_PATH ?? "",
  BASE_URL: process.env.BASE_URL ?? "",
  DEV: process.env.NODE_ENV === "development",
};
