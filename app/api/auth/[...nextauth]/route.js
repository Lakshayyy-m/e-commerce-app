import NextAuth from "next-auth";
import GoogleProivder from "next-auth/providers/google";


export const authOptions = {
  providers: [
    GoogleProivder({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
