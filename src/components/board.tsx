import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { getCard, cardBack, emptySlot } from "../game/card";
import { Game, Stack } from "../game/gameTypes";
import { deal, moveStack, stopMove } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import "./board.css";

type BoardProps = { width: number };

export default function Board(props: BoardProps) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(deal());
	}, []);

	const game: Game = useAppSelector((state) => state.game);

	const renderColumn = (column: Stack) => {
		return (
			<div style={{ position: "relative" }}>
				{column.data.length > 0
					? column.data.map((card, i) => {
							let top = 0;
							if (i > 0) {
								if (props.width > 1300) top = i * 35;
								else top = i * (props.width / 37);
							}
							const z = card.posOffset.x === 0 ? i : i + 20;
							return (
								<Draggable
									onStart={() => {
										if (!card.revealed) return false;
									}}
									onDrag={(e, pos) => {
										dispatch(
											moveStack({
												stack: column,
												index: i,
												posOffset: { x: pos.x, y: pos.y },
											})
										);
									}}
									onStop={() => {
										dispatch(stopMove(column));
									}}
									position={{ x: card.posOffset.x, y: card.posOffset.y }}
								>
									<div
										style={{
											position: "absolute",
											zIndex: z,
											left: 0,
											right: 0,
											top,
											bottom: 0,
										}}
									>
										{getCard(card)}
									</div>
								</Draggable>
							);
					  })
					: emptySlot}
			</div>
		);
	};

	return (
		<table className="table">
			<tr>
				<td className="card_slot">
					{game.deck.data.length > 0 ? cardBack : emptySlot}
				</td>
				<td className="card_slot">{emptySlot}</td>
				<td className="card_slot"></td>
				<td className="card_slot">{emptySlot}</td>
				<td className="card_slot">{emptySlot}</td>
				<td className="card_slot">{emptySlot}</td>
				<td className="card_slot">{emptySlot}</td>
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
