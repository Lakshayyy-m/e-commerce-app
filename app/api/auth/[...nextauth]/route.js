import NextAuth from "next-auth";
import GoogleProivder from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    GoogleProivder({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
