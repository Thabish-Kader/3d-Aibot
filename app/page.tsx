import { ChatBotCanvas } from "@/components/ChatBotCanvas";
import { TextToSpeech } from "@/components/TextToSpeech";

export default function Home() {
	return (
		<main className="h-screen">
			{/* <TextToSpeech /> */}
			<ChatBotCanvas />
		</main>
	);
}
