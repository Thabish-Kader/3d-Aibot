"use client";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

//Resource to CyberPunkHead : https:sketchfab.com/3d-models/cyber-meta-human-head-portraitfromthefuture-683e2fd4850d49268c5363ca0b1e89ad
const CyberPunkHead = () => {
	const model = useGLTF("/myHead.glb");
	const animations = useAnimations(model.animations, model.scene);
	const action = animations.actions.Animation;

	// useEffect(() => {
	// 	action?.play();
	// 	action?.fadeOut(10);
	// }, [action]);

	return <primitive object={model.scene} scale={3} />;
};

export const ChatBotCanvas = () => {
	return (
		<Canvas>
			<OrbitControls />
			<ambientLight />
			<pointLight position={[0, 1, 3]} />
			<CyberPunkHead />
		</Canvas>
	);
};
