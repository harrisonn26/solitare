import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { getCard, cardBack, emptySlot, emptyDeck } from "../game/card";
import { getDroppedColumn } from "../game/game";
import { Game, Stack } from "../game/gameTypes";
import { deal, moveStack, stopMove, drawDeck } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import "./board.css";

type BoardProps = { width: number };

export default function Board(props: BoardProps) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(deal());
	}, []);

	const game: Game = useAppSelector((state) => state.game);

	const renderColumn = (column: Stack, cascade: boolean) => {
		return (
			<div style={{ position: "relative" }}>
				{column.data.length > 0
					? column.data.map((card, i) => {
							let top = 0;
							if (i > 0 && cascade) {
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
									onStop={(e, pos) => {
										dispatch(
											stopMove({
												stack: column,
												dropId: getDroppedColumn(
													column.id,
													pos.x,
													pos.y + top,
													!cascade
												),
												index: i,
											})
										);
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
					{game.deck.data.length > 0 ? (
						<div
							onClick={() => {
								dispatch(drawDeck());
							}}
						>
							{cardBack}
						</div>
					) : (
						<div onClick={() => dispatch(drawDeck())}>{emptyDeck}</div>
					)}
				</td>
				<td className="card_slot">
					{game.flippedDeck.data.length > 0
						? renderColumn(game.flippedDeck, false)
						: emptySlot}
				</td>
				<td className="card_slot"></td>
				<td className="card_slot">
					{game.home1.data.length === 0
						? emptySlot
						: getCard(game.home1.data[game.home1.data.length - 1])}
				</td>
				<td className="card_slot">
					{game.home2.data.length === 0
						? emptySlot
						: getCard(game.home2.data[game.home2.data.length - 1])}
				</td>
				<td className="card_slot">
					{game.home3.data.length === 0
						? emptySlot
						: getCard(game.home3.data[game.home3.data.length - 1])}
				</td>
				<td className="card_slot">
					{game.home4.data.length === 0
						? emptySlot
						: getCard(game.home4.data[game.home4.data.length - 1])}
				</td>
			</tr>
			<tr>
				<td className="card_slot">{renderColumn(game.col1, true)}</td>
				<td className="card_slot">{renderColumn(game.col2, true)}</td>
				<td className="card_slot">{renderColumn(game.col3, true)}</td>
				<td className="card_slot">{renderColumn(game.col4, true)}</td>
				<td className="card_slot">{renderColumn(game.col5, true)}</td>
				<td className="card_slot">{renderColumn(game.col6, true)}</td>
				<td className="card_slot">{renderColumn(game.col7, true)}</td>
			</tr>
		</table>
	);
}
