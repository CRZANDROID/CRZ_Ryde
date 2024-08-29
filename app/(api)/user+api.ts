import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    console.log("Processing request...");

    const sql = neon(`${process.env.DATABASE_URL}`);
    console.log("Connected to the database...");

    const { name, email, clerkId } = await request.json();
    console.log("Received data:", { name, email, clerkId });

    if (!name || !email || !clerkId) {
      console.log("Missing required fields");
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const response = await sql`
    INSERT INTO users(
        name,
        email,
        clerk_Id)
        VALUES (
            ${name},
            ${email}, 
            ${clerkId}
        )
    `;
    console.log("Data inserted successfully");

    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    } else {
      return new Response(JSON.stringify({ error: "Unknown error occurred" }), {
        status: 500,
      });
    }
  }
}
