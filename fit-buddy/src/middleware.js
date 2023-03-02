export { default } from "next-auth/middleware";

export const config = { matcher: ["/index", "/dashboard/:path"] };
