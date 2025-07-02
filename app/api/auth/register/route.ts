import db from "@/db"
import { usersTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body
  const username = body.username || email.split("@")[0] // Default username to part of email if not provided

  const checkUser = await db.select().from(usersTable).where(eq(usersTable.email, email))

  if (checkUser.length > 0) {
    return new Response(JSON.stringify({ message: "User already exists", email }), {
      status: 409,
    })
  }

  // Proceed with user registration
  await db.insert(usersTable).values({ username, email, password })

  return new Response(JSON.stringify({ message: "User registered successfully", email }), {
    status: 201,
  })
}
