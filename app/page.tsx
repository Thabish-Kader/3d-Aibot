import { TextToSpeech } from "@/components/TextToSpeech";
import { IsPlayingProvider } from "./context/IsPlayingContext";
import { ChatBotCanvasV2 } from "@/components/ChatBotCanvas";

export default function Home() {
	return (
		<main className="h-screen">
			<IsPlayingProvider>
				<TextToSpeech />
				<ChatBotCanvasV2 />
			</IsPlayingProvider>
		</main>
	);
}
