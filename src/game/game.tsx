import { ColumnCoords, ColumnID, Game, Stack } from "./gameTypes";

function getDeck() {
	const cards = JSON.parse(JSON.stringify(defaultDeck));
	let currentIndex = cards.data.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[cards.data[currentIndex], cards.data[randomIndex]] = [
			cards.data[randomIndex],
			cards.data[currentIndex],
		];
	}

	return cards;
}
export default function dealer(): Game {
	const cards = getDeck();
	const col1: Stack = { id: ColumnID.col1, data: cards.data.splice(0, 1) };
	const col2: Stack = { id: ColumnID.col2, data: cards.data.splice(0, 2) };
	const col3: Stack = { id: ColumnID.col3, data: cards.data.splice(0, 3) };
	const col4: Stack = { id: ColumnID.col4, data: cards.data.splice(0, 4) };
	const col5: Stack = { id: ColumnID.col5, data: cards.data.splice(0, 5) };
	const col6: Stack = { id: ColumnID.col6, data: cards.data.splice(0, 6) };
	const col7: Stack = { id: ColumnID.col7, data: cards.data.splice(0, 7) };
	const deck: Stack = { id: ColumnID.deck, data: cards.data };
	const flippedDeck: Stack = { id: ColumnID.flippedDeck, data: [] };
	const home1: Stack = { id: ColumnID.home1, data: [] };
	const home2: Stack = { id: ColumnID.home2, data: [] };
	const home3: Stack = { id: ColumnID.home3, data: [] };
	const home4: Stack = { id: ColumnID.home4, data: [] };
	col1.data[0].revealed = true;
	col2.data[1].revealed = true;
	col3.data[2].revealed = true;
	col4.data[3].revealed = true;
	col5.data[4].revealed = true;
	col6.data[5].revealed = true;
	col7.data[6].revealed = true;
	for (let i in deck.data) {
		deck.data[i].revealed = true;
	}

	return {
		col1,
		col2,
		col3,
		col4,
		col5,
		col6,
		col7,
		deck,
		flippedDeck,
		home1,
		home2,
		home3,
		home4,
		completed: false,
	};
}

const posOffset = { x: 0, y: 0 };

const defaultDeck: Stack = {
	id: -1,
	data: [
		{ value: 1, suit: "heart", revealed: false, moving: false },
		{ value: 2, suit: "heart", revealed: false, moving: false },
		{ value: 3, suit: "heart", revealed: false, moving: false },
		{ value: 4, suit: "heart", revealed: false, moving: false },
		{ value: 5, suit: "heart", revealed: false, moving: false },
		{ value: 6, suit: "heart", revealed: false, moving: false },
		{ value: 7, suit: "heart", revealed: false, moving: false },
		{ value: 8, suit: "heart", revealed: false, moving: false },
		{ value: 9, suit: "heart", revealed: false, moving: false },
		{ value: 10, suit: "heart", revealed: false, moving: false },
		{ value: 11, suit: "heart", revealed: false, moving: false },
		{ value: 12, suit: "heart", revealed: false, moving: false },
		{ value: 13, suit: "heart", revealed: false, moving: false },
		{ value: 1, suit: "diamond", revealed: false, moving: false },
		{ value: 2, suit: "diamond", revealed: false, moving: false },
		{ value: 3, suit: "diamond", revealed: false, moving: false },
		{ value: 4, suit: "diamond", revealed: false, moving: false },
		{ value: 5, suit: "diamond", revealed: false, moving: false },
		{ value: 6, suit: "diamond", revealed: false, moving: false },
		{ value: 7, suit: "diamond", revealed: false, moving: false },
		{ value: 8, suit: "diamond", revealed: false, moving: false },
		{ value: 9, suit: "diamond", revealed: false, moving: false },
		{ value: 10, suit: "diamond", revealed: false, moving: false },
		{ value: 11, suit: "diamond", revealed: false, moving: false },
		{ value: 12, suit: "diamond", revealed: false, moving: false },
		{ value: 13, suit: "diamond", revealed: false, moving: false },
		{ value: 1, suit: "club", revealed: false, moving: false },
		{ value: 2, suit: "club", revealed: false, moving: false },
		{ value: 3, suit: "club", revealed: false, moving: false },
		{ value: 4, suit: "club", revealed: false, moving: false },
		{ value: 5, suit: "club", revealed: false, moving: false },
		{ value: 6, suit: "club", revealed: false, moving: false },
		{ value: 7, suit: "club", revealed: false, moving: false },
		{ value: 8, suit: "club", revealed: false, moving: false },
		{ value: 9, suit: "club", revealed: false, moving: false },
		{ value: 10, suit: "club", revealed: false, moving: false },
		{ value: 11, suit: "club", revealed: false, moving: false },
		{ value: 12, suit: "club", revealed: false, moving: false },
		{ value: 13, suit: "club", revealed: false, moving: false },
		{ value: 1, suit: "spade", revealed: false, moving: false },
		{ value: 2, suit: "spade", revealed: false, moving: false },
		{ value: 3, suit: "spade", revealed: false, moving: false },
		{ value: 4, suit: "spade", revealed: false, moving: false },
		{ value: 5, suit: "spade", revealed: false, moving: false },
		{ value: 6, suit: "spade", revealed: false, moving: false },
		{ value: 7, suit: "spade", revealed: false, moving: false },
		{ value: 8, suit: "spade", revealed: false, moving: false },
		{ value: 9, suit: "spade", revealed: false, moving: false },
		{ value: 10, suit: "spade", revealed: false, moving: false },
		{ value: 11, suit: "spade", revealed: false, moving: false },
		{ value: 12, suit: "spade", revealed: false, moving: false },
		{ value: 13, suit: "spade", revealed: false, moving: false },
	],
};
export function getDroppedColumn(
	col: number,
	x: number,
	y: number,
	fromDeck: boolean
): number {
	const width = window.innerWidth;
	let cardHeight = 224;
	let dropWindow: number = 75;
	let move: number = 0;
	const coords: ColumnCoords = {
		col1: 100,
		col2: 260,
		col3: 440,
		col4: 610,
		col5: 780,
		col6: 950,
		col7: 1120,
	};
	if (width < 1220) {
		coords.col1 = width / 12.2;
		coords.col2 = width / 4.7;
		coords.col3 = width / 2.8;
		coords.col4 = width / 2;
		coords.col5 = width / 1.6;
		coords.col6 = width / 1.3;
		coords.col7 = width / 1.1;
		dropWindow = width / 16;
		cardHeight = width * 0.2;
	}

	switch (col) {
		case ColumnID.col1:
			move = coords.col1 + x;
			break;
		case ColumnID.col2:
			move = coords.col2 + x;
			break;
		case ColumnID.col3:
			move = coords.col3 + x;
			break;
		case ColumnID.col4:
			move = coords.col4 + x;
			break;
		case ColumnID.col5:
			move = coords.col5 + x;
			break;
		case ColumnID.col6:
			move = coords.col6 + x;
			break;
		case ColumnID.col7:
			move = coords.col7 + x;
			break;
		case ColumnID.flippedDeck:
			move = coords.col2 + x;
			break;
		case ColumnID.home1:
			move = coords.col4 + x;
			break;
		case ColumnID.home2:
			move = coords.col5 + x;
			break;
		case ColumnID.home3:
			move = coords.col6 + x;
			break;
		case ColumnID.home4:
			move = coords.col7 + x;
			break;
		default:
			return -1;
	}
	if (move > coords.col1 - dropWindow && move < coords.col1 + dropWindow) {
		return ColumnID.col1;
	}
	if (move > coords.col2 - dropWindow && move < coords.col2 + dropWindow) {
		return ColumnID.col2;
	}
	if (move > coords.col3 - dropWindow && move < coords.col3 + dropWindow) {
		return ColumnID.col3;
	}
	if (move > coords.col4 - dropWindow && move < coords.col4 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2))
			return ColumnID.home1;
		else return ColumnID.col4;
	}
	if (move > coords.col5 - dropWindow && move < coords.col5 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2))
			return ColumnID.home2;
		else return ColumnID.col5;
	}
	if (move > coords.col6 - dropWindow && move < coords.col6 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2))
			return ColumnID.home3;
		else return ColumnID.col6;
	}
	if (move > coords.col7 - dropWindow && move < coords.col7 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2))
			return ColumnID.home4;
		else return ColumnID.col7;
	}
	return 0;
}
