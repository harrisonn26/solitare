import React, { useEffect, useState } from "react";
import Board from "./components/board";
export default function App() {
	const [windowDimentions, setWindowDimentions] = useState({
		width: innerWidth,
		height: innerHeight,
	});
	const handleResize = () => {
		setWindowDimentions({
			height: window.innerHeight,
			width: window.innerWidth,
		});
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div>
			<Board width={windowDimentions.width} />
		</div>
	);
}
