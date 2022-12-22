import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/user.model";
import connectDB from "../../../middleware/connectDB";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      // fetch user from database
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ phone: credentials.phone });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await User.findOne({ email: session.user.email }, { password: 0 });
      if (session.user) {
        session.user.role = user.role;
        session.user.name = user.name;
        session.user.id = user._id;
        session.user.phone = user.phone;
        session.user.subscriptions = user.subscriptions;
        session.user.referalCode = user.referalCode;



      }
      return session;
    },
    async jwt({ token }) {
      const user = await User.findOne({ email: token.email }, { password: 0 });
      if (user) {
        token.role = user.role;
      }
      return token;
    }
  },

  pages: {
    signIn: "/auth/signin",
  },
});