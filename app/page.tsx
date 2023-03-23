import { TextToSpeech } from "@/components/TextToSpeech";
import { IsPlayingProvider } from "./context/IsPlayingContext";
import { ChatBotCanvas } from "@/components/ChatBotCanvas";

export default function Home() {
	return (
		<main className="h-screen">
			<IsPlayingProvider>
				<TextToSpeech />
				<ChatBotCanvas />
			</IsPlayingProvider>
		</main>
	);
}
