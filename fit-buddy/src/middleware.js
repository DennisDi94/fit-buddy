export { default } from "next-auth/middleware";

export const config = { matcher: ["/index", "/exercises/:path"] };
