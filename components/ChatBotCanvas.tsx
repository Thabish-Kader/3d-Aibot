"use client";

import { AppContext } from "../app/context/IsPlayingContext";
import {
	Environment,
	OrbitControls,
	useAnimations,
	useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext, useEffect } from "react";

//Resource to Head : https://sketchfab.com/3d-models/blender-sushi-virtual-journal-16th-april-2020-634af2ae983f4fb8a9295e6b1b3d5c74
const Head = () => {
	const model = useGLTF("/head.glb");
	const animations = useAnimations(model.animations, model.scene);
	const action = animations.actions.Animation;
	const { isPlaying, setIsPlaying } = useContext(AppContext);

	useEffect(() => {
		if (isPlaying) {
			action?.play();
		} else {
			action?.fadeOut(1);
		}
	}, [isPlaying, action]);

	return <primitive object={model.scene} scale={3} rotation-z={0.2} />;
};

export const ChatBotCanvas = () => {
	return (
		<Canvas>
			<OrbitControls
				enableZoom={false}
				enableDamping
				maxPolarAngle={2}
				minAzimuthAngle={-Math.PI * 0.5}
				maxAzimuthAngle={Math.PI * 0.5}
			/>
			<Environment preset="studio" />
			<Head />
		</Canvas>
	);
};
