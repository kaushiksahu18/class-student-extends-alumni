import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Name" },
        email: { label: "Email", type: "email", placeholder: "Email" },
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const prisma = new PrismaClient();
        try {
          const dbuser = await prisma.user.upsert({
            where: {
              email: credentials?.email,
              password: credentials?.password,
            },
            update: {},
            create: {
              name: credentials?.name as string,
              email: credentials?.email as string,
              password: credentials?.password,
              username:
                credentials?.email?.match(/(.*)@gmail.com$/)?.[1] ||
                (credentials?.email as string),
            },
          });

          if (dbuser.id) {
            return {
              ...dbuser,
              id: dbuser.id.toString()
            };
          }
        } catch (err) {
          console.log(err);
          return null;
        } finally {
          await prisma.$disconnect();
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const prisma = new PrismaClient();
        try {
          const dbuser = await prisma.user.upsert({
            where: {
              email: user.email as string,
            },
            update: {
              name: user.name as string,
            },
            create: {
              name: user.name as string,
              email: user.email as string,
              username:
                user.email?.match(/(.*)@gmail.com$/)?.[1] ||
                (user.email as string),
            },
          });

          if (dbuser.id) {
            user.id = dbuser.id.toString();
            return true;
          }
        } catch (err) {
          console.log(err);
          return false;
        } finally {
          await prisma.$disconnect();
        }
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // } 
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
