import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { getCard, cardBack, emptySlot, emptyDeck } from "../game/card";
import { getDroppedColumn } from "../game/game";
import { Game, Stack } from "../game/gameTypes";
import { deal, stopMove, drawDeck, startMove } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import "./board.css";

type BoardProps = { width: number };

export default function Board(props: BoardProps) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(deal());
	}, []);

	const [movingCoords, setMovingCoords] = useState({ x: 0, y: 0 });

	const game: Game = useAppSelector((state) => state.present.game);

	const renderColumn = (column: Stack, cascade: boolean) => {
		return (
			<div style={{ position: "relative", padding: 0 }}>
				{column.data.length > 0
					? column.data.map((card, i) => {
							let top = 0;
							if (i > 0 && cascade) {
								if (props.width > 1300) top = i * 35;
								else top = i * (props.width / 37);
							}
							const z = card.moving ? i + 20 : i;
							return (
								<Draggable
									onStart={() => {
										if (!card.revealed) return false;
										dispatch(startMove({ index: i, stack: column }));
									}}
									onDrag={(e, pos) => {
										setMovingCoords({ x: pos.x, y: pos.y });
									}}
									onStop={(e, pos) => {
										setMovingCoords({ x: 0, y: 0 });
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
									position={{
										x: card.moving ? movingCoords.x : 0,
										y: card.moving ? movingCoords.y : 0,
									}}
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
							style={{ padding: 0 }}
							onClick={() => {
								dispatch(drawDeck());
							}}
						>
							{cardBack}
						</div>
					) : (
						<div style={{ padding: 0 }} onClick={() => dispatch(drawDeck())}>
							{emptyDeck}
						</div>
					)}
				</td>
				<td className="card_slot">{renderColumn(game.flippedDeck, false)}</td>
				<td className="card_slot"></td>
				<td className="card_slot">{renderColumn(game.home1, false)}</td>
				<td className="card_slot">{renderColumn(game.home2, false)}</td>
				<td className="card_slot">{renderColumn(game.home3, false)}</td>
				<td className="card_slot">{renderColumn(game.home4, false)}</td>
			</tr>
			{game.completed ? (
				<tr>
					<td className="victory">VICTORY</td>
				</tr>
			) : (
				<tr>
					<td className="card_slot">{renderColumn(game.col1, true)}</td>
					<td className="card_slot">{renderColumn(game.col2, true)}</td>
					<td className="card_slot">{renderColumn(game.col3, true)}</td>
					<td className="card_slot">{renderColumn(game.col4, true)}</td>
					<td className="card_slot">{renderColumn(game.col5, true)}</td>
					<td className="card_slot">{renderColumn(game.col6, true)}</td>
					<td className="card_slot">{renderColumn(game.col7, true)}</td>
				</tr>
			)}
		</table>
	);
}
