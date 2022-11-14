import { ColumnCoords, Stack } from "./gameTypes";

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
export default function dealer() {
	const cards = getDeck();
	const column1: Stack = { id: 1, data: cards.data.splice(0, 1) };
	const column2: Stack = { id: 2, data: cards.data.splice(0, 2) };
	const column3: Stack = { id: 3, data: cards.data.splice(0, 3) };
	const column4: Stack = { id: 4, data: cards.data.splice(0, 4) };
	const column5: Stack = { id: 5, data: cards.data.splice(0, 5) };
	const column6: Stack = { id: 6, data: cards.data.splice(0, 6) };
	const column7: Stack = { id: 7, data: cards.data.splice(0, 7) };
	const deck: Stack = { id: 0, data: cards.data };

	column1.data[0].revealed = true;
	column2.data[1].revealed = true;
	column3.data[2].revealed = true;
	column4.data[3].revealed = true;
	column5.data[4].revealed = true;
	column6.data[5].revealed = true;
	column7.data[6].revealed = true;
	for (let i in deck.data) {
		deck.data[i].revealed = true;
	}

	return {
		col1: column1,
		col2: column2,
		col3: column3,
		col4: column4,
		col5: column5,
		col6: column6,
		col7: column7,
		deck: deck,
	};
}

const posOffset = { x: 0, y: 0 };

const defaultDeck: Stack = {
	id: -1,
	data: [
		{ value: 1, suit: "heart", revealed: false, posOffset },
		{ value: 2, suit: "heart", revealed: false, posOffset },
		{ value: 3, suit: "heart", revealed: false, posOffset },
		{ value: 4, suit: "heart", revealed: false, posOffset },
		{ value: 5, suit: "heart", revealed: false, posOffset },
		{ value: 6, suit: "heart", revealed: false, posOffset },
		{ value: 7, suit: "heart", revealed: false, posOffset },
		{ value: 8, suit: "heart", revealed: false, posOffset },
		{ value: 9, suit: "heart", revealed: false, posOffset },
		{ value: 10, suit: "heart", revealed: false, posOffset },
		{ value: 11, suit: "heart", revealed: false, posOffset },
		{ value: 12, suit: "heart", revealed: false, posOffset },
		{ value: 13, suit: "heart", revealed: false, posOffset },
		{ value: 1, suit: "diamond", revealed: false, posOffset },
		{ value: 2, suit: "diamond", revealed: false, posOffset },
		{ value: 3, suit: "diamond", revealed: false, posOffset },
		{ value: 4, suit: "diamond", revealed: false, posOffset },
		{ value: 5, suit: "diamond", revealed: false, posOffset },
		{ value: 6, suit: "diamond", revealed: false, posOffset },
		{ value: 7, suit: "diamond", revealed: false, posOffset },
		{ value: 8, suit: "diamond", revealed: false, posOffset },
		{ value: 9, suit: "diamond", revealed: false, posOffset },
		{ value: 10, suit: "diamond", revealed: false, posOffset },
		{ value: 11, suit: "diamond", revealed: false, posOffset },
		{ value: 12, suit: "diamond", revealed: false, posOffset },
		{ value: 13, suit: "diamond", revealed: false, posOffset },
		{ value: 1, suit: "club", revealed: false, posOffset },
		{ value: 2, suit: "club", revealed: false, posOffset },
		{ value: 3, suit: "club", revealed: false, posOffset },
		{ value: 4, suit: "club", revealed: false, posOffset },
		{ value: 5, suit: "club", revealed: false, posOffset },
		{ value: 6, suit: "club", revealed: false, posOffset },
		{ value: 7, suit: "club", revealed: false, posOffset },
		{ value: 8, suit: "club", revealed: false, posOffset },
		{ value: 9, suit: "club", revealed: false, posOffset },
		{ value: 10, suit: "club", revealed: false, posOffset },
		{ value: 11, suit: "club", revealed: false, posOffset },
		{ value: 12, suit: "club", revealed: false, posOffset },
		{ value: 13, suit: "club", revealed: false, posOffset },
		{ value: 1, suit: "spade", revealed: false, posOffset },
		{ value: 2, suit: "spade", revealed: false, posOffset },
		{ value: 3, suit: "spade", revealed: false, posOffset },
		{ value: 4, suit: "spade", revealed: false, posOffset },
		{ value: 5, suit: "spade", revealed: false, posOffset },
		{ value: 6, suit: "spade", revealed: false, posOffset },
		{ value: 7, suit: "spade", revealed: false, posOffset },
		{ value: 8, suit: "spade", revealed: false, posOffset },
		{ value: 9, suit: "spade", revealed: false, posOffset },
		{ value: 10, suit: "spade", revealed: false, posOffset },
		{ value: 11, suit: "spade", revealed: false, posOffset },
		{ value: 12, suit: "spade", revealed: false, posOffset },
		{ value: 13, suit: "spade", revealed: false, posOffset },
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
		case 1:
			move = coords.col1 + x;
			break;
		case 2:
			move = coords.col2 + x;
			break;
		case 3:
			move = coords.col3 + x;
			break;
		case 4:
			move = coords.col4 + x;
			break;
		case 5:
			move = coords.col5 + x;
			break;
		case 6:
			move = coords.col6 + x;
			break;
		case 7:
			move = coords.col7 + x;
			break;
		case 8:
			move = coords.col2 + x;
			break;
		case 14:
			move = coords.col4 + x;
			break;
		case 15:
			move = coords.col5 + x;
			break;
		case 16:
			move = coords.col6 + x;
			break;
		case 17:
			move = coords.col7 + x;
			break;
		default:
			return -1;
	}
	if (move > coords.col1 - dropWindow && move < coords.col1 + dropWindow) {
		return 1;
	}
	if (move > coords.col2 - dropWindow && move < coords.col2 + dropWindow) {
		return 2;
	}
	if (move > coords.col3 - dropWindow && move < coords.col3 + dropWindow) {
		return 3;
	}
	if (move > coords.col4 - dropWindow && move < coords.col4 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2)) return 14;
		else return 4;
	}
	if (move > coords.col5 - dropWindow && move < coords.col5 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2)) return 15;
		else return 5;
	}
	if (move > coords.col6 - dropWindow && move < coords.col6 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2)) return 16;
		else return 6;
	}
	if (move > coords.col7 - dropWindow && move < coords.col7 + dropWindow) {
		if (y < -cardHeight || (fromDeck && y < cardHeight / 2)) return 17;
		else return 7;
	}
	return 0;
}
