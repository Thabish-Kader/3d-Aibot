export const sendTextToOpenAi = async (userText: string): Promise<string> => {
	const response = await fetch("/api/openai", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({ userText }),
	});
	const { message }: { message: string } = await response.json();
	return message;
};
