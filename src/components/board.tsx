import React, { useEffect } from "react";
import { getCard, cardBack } from "../game/card";
import { Game, Stack } from "../game/gameTypes";
import { deal } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import "./board.css";

type BoardProps = {};

export default function Board(props: BoardProps) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(deal());
	}, []);
	const game: Game = useAppSelector((state) => state.game);

	const renderColumn = (column: Stack) => {
		return (
			<div style={{ position: "relative" }}>
				{column.map((card, i) => {
					let top = 0;
					if (i > 0) {
						top = i * 30;
					}
					return (
						<div
							style={{
								position: "absolute",
								zIndex: i,
								left: 0,
								right: 0,
								top,
								bottom: 0,
							}}
						>
							{getCard(card)}
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<table>
			<tr>
				<td className="card_slot">{game.deck.length > 0 ? cardBack : null}</td>
				<td className="card_slot"></td>
				<td className="card_slot"></td>
				<td className="card_slot"></td>
				<td className="card_slot"></td>
				<td className="card_slot"></td>
				<td className="card_slot"></td>
			</tr>
			<tr>
				<td className="card_slot">{renderColumn(game.col1)}</td>
				<td className="card_slot">{renderColumn(game.col2)}</td>
				<td className="card_slot">{renderColumn(game.col3)}</td>
				<td className="card_slot">{renderColumn(game.col4)}</td>
				<td className="card_slot">{renderColumn(game.col5)}</td>
				<td className="card_slot">{renderColumn(game.col6)}</td>
				<td className="card_slot">{renderColumn(game.col7)}</td>
			</tr>
		</table>
	);
}
