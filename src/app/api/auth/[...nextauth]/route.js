import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/utils/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email", placeholder: "Email" },
        password: { type: "password", placeholder: "Password" },
      },
      // the authorize methode inside credential provider will be called when user hit signin
      async authorize(credentials) {
        // here we have to check in our users DB to see that if such a user is existed and if the pass is correct then we return the user object into the session of the next Auth which means the user is Authenticated

        try {
          // const user = await User.findOne({ email: credentials.email });
          const user = await authOptions.adapter.getUserByEmail(
            credentials.email
          );

          // if (user) {
          //   return user;
          // } else {
          //   return null;
          // }
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Email or Password");
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
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // Set it as jwt instead of database
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = user.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
