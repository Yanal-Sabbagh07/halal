import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email", placeholder: "Email" },
        password: { typer: "password", placeholder: "Password" },
      },
      // the authorize methode inside credential provider will be called when user hit signin
      async authorize(credentials, req) {
        // here we have to check in our users DB to see that if such a user is existed and if the pass is correct then we return the user object into the session of the next Auth which means the user is Authenticated
        await connectToMongoDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/login",
  },
});

export { handler as GET, handler as POST };
