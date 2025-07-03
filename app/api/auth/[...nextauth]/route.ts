import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import db from "@/db"
import { usersTable } from "@/db/schema"
import { eq } from "drizzle-orm"



export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: "Email", type: "email", placeholder: "you@example.com" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) return null;
        const user = await db.select().from(usersTable).where(eq(usersTable.email, credentials?.email))
        if(user.length <= 0) return null;
        if (user && user[0].password === credentials?.password) {
          await db.update(usersTable).set({ isActive: true }).where(eq(usersTable.id, user[0].id))
          return { id: user[0].id, name: user[0].username, email: user[0].email };
        }
        // Return null if user data could not be retrieved
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
  },
  pages: {
    signIn: '/sign-in',
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }