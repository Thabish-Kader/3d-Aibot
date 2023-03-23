import { ChatBotCanvas } from "@/components/ChatBotCanvas";
import { TextToSpeech } from "@/components/TextToSpeech";
import { IsPlayingProvider } from "./context/IsPlayingContext";
import { ChatBotCanvasV2 } from "@/components/ChatBotCanvasV2";

export default function Home() {
	return (
		<main className="h-screen">
			<IsPlayingProvider>
				<TextToSpeech />
				<ChatBotCanvas />
				{/* <ChatBotCanvasV2 /> */}
			</IsPlayingProvider>
		</main>
	);
}
