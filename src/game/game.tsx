import { Stack } from "./gameTypes";

function getDeck() {
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
	column7.data[5].revealed = true;

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

const cards: Stack = {
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
