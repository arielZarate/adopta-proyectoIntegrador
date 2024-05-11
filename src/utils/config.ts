// config.js
const { NEXT_PUBLIC_BASE_API_URL } = process.env;

const NEXT_PUBLIC_URL_BASE =
  process.env.NODE_ENV === "production"
    ? `${NEXT_PUBLIC_BASE_API_URL}`
    : "http://localhost:3000";

export default NEXT_PUBLIC_URL_BASE;
