// config.js
const URL_BASE =
  process.env.NODE_ENV === "production"
    ? "https://adopta.vercel.app"
    : "http://localhost:3000";

export default URL_BASE;
