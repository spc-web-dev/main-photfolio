export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body

  // Perform registration logic here
  console.log("Registering user:", email)

  return new Response("User registered", { status: 201 })
}
