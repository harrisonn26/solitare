import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { getCard, cardBack, emptyDeck } from "../game/card";
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
			<div
				style={{
					position: "relative",
					padding: 0,
					boxShadow: "0px 0px 0px 2px white inset",
					borderRadius: "12px",
					aspectRatio: 250 / 350,
				}}
			>
				{column.data.map((card, i) => {
					let top = 0;
					if (i > 0 && cascade) {
						if (props.width > 1300) top = i * 25;
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
				})}
			</div>
		);
	};

	return (
		<>
			<table className="table">
				<tr>
					<td className="card_slot">
						<div
							style={{
								position: "relative",
								padding: 0,
								boxShadow: "0px 0px 0px 2px white inset",
								borderRadius: "12px",
								aspectRatio: 250 / 350,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							onClick={() => {
								dispatch(drawDeck());
							}}
						>
							{game.deck.data.length > 0 ? (
								cardBack
							) : (
								<div
									style={{
										width: "50%",
										aspectRatio: 1,
										borderRadius: 100,
										border: "2px solid #FFFFFF",
									}}
								/>
							)}
						</div>
					</td>
					<td className="card_slot">{renderColumn(game.flippedDeck, false)}</td>
					<td className="card_slot"></td>
					<td className="card_slot">{renderColumn(game.home1, false)}</td>
					<td className="card_slot">{renderColumn(game.home2, false)}</td>
					<td className="card_slot">{renderColumn(game.home3, false)}</td>
					<td className="card_slot">{renderColumn(game.home4, false)}</td>
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
			{game.completed && (
				<div
					style={{
						color: "#FFFFFF",
						display: "flex",
						justifyContent: "center",
						fontSize: 70,
					}}
				>
					Victory!!
				</div>
			)}
		</>
	);
}
