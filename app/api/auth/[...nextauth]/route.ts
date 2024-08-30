import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from "@/lib/utils";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing Google OAuth environment variables");
}

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
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        if (credentials && credentials.email && credentials.password) {
          try {
            const dbuser = await prismaClient.user.upsert({
              where: {
                email: credentials.email,
                password: credentials.password,
              },
              update: { name: credentials?.name as string },
              create: {
                name: credentials?.name as string,
                email: credentials.email,
                password: credentials.password,
                username: generateUsername(credentials.email),
              },
            });

            if (dbuser.id) {
              return {
                ...dbuser,
                id: dbuser.id.toString(),
              };
            }
          } catch (err) {
            console.log(err);
            return null;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        try {
          const dbuser = await prismaClient.user.upsert({
            where: {
              email: user.email,
            },
            update: {
              name: user.name as string,
            },
            create: {
              name: user.name as string,
              email: user.email,
              username: generateUsername(user.email),
            },
          });

          if (dbuser.id) {
            user.id = dbuser.id.toString();
            return true;
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    async redirect({baseUrl,url}) {
      return baseUrl;
    },
  },
};

export function generateUsername(email: string): string {
  return email.split("@")[0] || email;
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
