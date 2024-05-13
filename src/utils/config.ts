// config.js

const NEXT_PUBLIC_URL_BASE =
  process.env.NODE_ENV === "production"
    ? `${process.env.NEXT_PUBLIC_URL_PRODUCTION}`
    : "http://localhost:3000";

export default NEXT_PUBLIC_URL_BASE;
