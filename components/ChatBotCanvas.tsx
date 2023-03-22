"use client";
import { AppContext } from "../app/context/IsPlayingContext";
import {
	Environment,
	Html,
	Loader,
	OrbitControls,
	useAnimations,
	useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useContext, useEffect } from "react";

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
			action?.fadeOut(0.5);
			setTimeout(() => {
				action?.stop();
			}, 500);
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
			<Suspense
				fallback={
					<Html>
						<Loader />
					</Html>
				}
			>
				<Head />
			</Suspense>
		</Canvas>
	);
};
