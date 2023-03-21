"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
	return (
		<main>
			<Canvas>
				<mesh>
					<boxGeometry />
					<OrbitControls />
				</mesh>
			</Canvas>
		</main>
	);
}
