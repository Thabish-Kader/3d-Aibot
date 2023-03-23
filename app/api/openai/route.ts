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
				"hey there visitor this is thabish here... the developer who created this creepy project. I have revoked the API key for this project. Why... you ask because... i dont want to go bankrupt obviosly. If you wanna see how this wroks check out my YouTube video on this ",
		},
		{ status: 200 }
	);
}
