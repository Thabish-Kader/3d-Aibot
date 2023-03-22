import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET(request: Request) {
	return new Response("Hello, Next.js!");
}

export async function POST(request: Request) {
	const { userText } = await request.json();

	// const completion = await openai.createChatCompletion({
	// 	model: "gpt-3.5-turbo",
	// 	messages: [{ role: "user", content: userText }],
	// });

	// const aiMessage = completion.data.choices[0].message?.content;

	return NextResponse.json(
		{
			message:
				"In the history of Europe, the Middle Ages or medieval period (also spelled mediæval or mediaeval) lasted approximately from the late 5th to the late 15th centuries, similar to the post-classical period of global history.",
		},
		{ status: 200 }
	);
}
