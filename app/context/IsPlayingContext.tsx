"use client";
import { ReactNode, createContext, useState } from "react";

interface AppContextType {
	isPlaying: boolean;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
	isPlaying: false,
	setIsPlaying: () => {},
});

export const IsPlayingProvider = ({ children }: { children: ReactNode }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<AppContext.Provider value={{ isPlaying, setIsPlaying }}>
			{children}
		</AppContext.Provider>
	);
};
