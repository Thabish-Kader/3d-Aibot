"use client";
import { AppContext } from "../app/context/IsPlayingContext";
import { sendTextToOpenAi } from "@/utils/sendTextToOpenai";
import React, { FormEvent, useContext, useState } from "react";

export const TextToSpeech = () => {
	const [userText, setUserText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { isPlaying, setIsPlaying } = useContext(AppContext);
	const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
	const voices = synth?.getVoices();

	const seletedVoice = voices?.find((voice) => voice.name === "Karen"); // Other voice that sounds good Karen, Tessa, Trinoids

	const speak = (textToSpeak: string) => {
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.rate = 0.9;
		utterance.voice = seletedVoice!;

		synth?.speak(utterance);
		setIsPlaying(true);
		utterance.onend = () => {
			setIsPlaying(false);
		};
	};

	async function handleUserText(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setIsLoading(true);
		try {
			const message = await sendTextToOpenAi(userText);
			speak(message);
		} catch (error) {
			let message = "";
			if (error instanceof Error) message = error.message;
			console.log(message);
		} finally {
			setIsLoading(false);
			setUserText("");
		}
	}

	return (
		<div className="relative top-0 z-50 ">
			<form
				onSubmit={handleUserText}
				className="absolute top-[800px] left-[30%]  space-x-2 pt-2 "
			>
				<input
					type="text"
					value={userText}
					className="bg-transparent w-[510px] border outline-none  rounded-lg placeholder:text-yellow-500 p-2 text-orange-500"
					onChange={(e) => setUserText(e.target.value)}
					placeholder="What do you want to know human...."
				/>
				<button
					disabled={isLoading}
					className="text-yellow-500 p-2 border rounded-lg disabled:text-yellow-100 disabled:cursor-not-allowed disabled:bg-gray-500"
				>
					{isLoading ? "thinking..." : "Ask"}
				</button>
			</form>
		</div>
	);
};
