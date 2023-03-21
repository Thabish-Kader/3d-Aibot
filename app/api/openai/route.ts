import { NextResponse } from "next/server";

export async function GET(request: Request) {
	return new Response("Hello, Next.js!");
}

export async function POST(request: Request) {
	const { userPrompt } = await request.json();
	console.log(userPrompt);
	return NextResponse.json(
		{ message: "Hello from chatbot" },
		{ status: 200 }
	);
}
