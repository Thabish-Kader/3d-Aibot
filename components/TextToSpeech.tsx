"use client";
import React, { useState } from "react";

export const TextToSpeech = () => {
	const [text, setText] = useState("");
	const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
	const voices = synth?.getVoices();

	const seletedVoice = voices?.find((voice) => voice.name === "Albert");

	const speak = () => {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.rate = -1;
		utterance.voice = seletedVoice!;
		synth?.speak(utterance);
	};

	return (
		<div className="space-x-2 pt-2">
			<input
				type="text"
				value={text}
				className="bg-transparent border outline-none  rounded-lg placeholder:text-yellow-500 p-2 text-orange-500"
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter text"
			/>
			<button
				className="text-yellow-500 p-2 border rounded-lg"
				onClick={speak}
			>
				Speak
			</button>
		</div>
	);
};
