import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth/next";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { SessionInterface } from "@/common.types";

export interface AdapterUser extends User {
  id: string;
  email: string;
  emailVerified: Date | null;
}

// export const dynamic = "force-dynamic";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  theme: {
    colorScheme: "light",
    logo: "/logo.svg",
  },
  callbacks: {
    async session({ session, user }) {
      // session.user = user;
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

// export async function getCurrentUser() {
//   const session = (await getServerSession(authOptions)) as SessionInterface;

//   return session;
// }

// import NextAuth, { NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import { custom } from "openid-client";

// export const authOptions: NextAuthOptions = {

//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async session({ session, token, user }) {
//       // session.user = user;
//       return session;
//     },
//   },
// };
// custom.setHttpOptionsDefaults({
//   timeout: 0,
// });
// // export default NextAuth(authOptions);
