export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(request) {
//     console.log(request.nextauth.token)
//     return NextResponse.redirect(new URL("/", request.nextUrl));
//   },
//   {
//     callbacks: {
//       authorized({ token }) {
//         console.log(token);
//         return !token;
//       },
//     },
//   }
// );

export const config = { matcher: ["/products"] };
