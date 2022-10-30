import React, { useEffect } from "react";
import getCard from "./game/card";
import { Game } from "./game/gameTypes";
import { deal } from "./store/gameSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

export default function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(deal());
	}, []);
	const game: Game = useAppSelector((state) => state.game);
	return (
		<div>
			{game.col1.map((card, i) => {
				return <div key={i}>{getCard(card)}</div>;
			})}
		</div>
	);
}
