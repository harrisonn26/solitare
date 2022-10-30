import { Stack } from "./gameTypes";
import Card from "./card";

function getDeck() {
	let currentIndex = cards.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[cards[currentIndex], cards[randomIndex]] = [
			cards[randomIndex],
			cards[currentIndex],
		];
	}

	return cards;
}
export default function dealer() {
	const cards = getDeck();
	const column1: Stack = cards.splice(0, 1);
	const column2: Stack = cards.splice(0, 2);
	const column3: Stack = cards.splice(0, 3);
	const column4: Stack = cards.splice(0, 4);
	const column5: Stack = cards.splice(0, 5);
	const column6: Stack = cards.splice(0, 6);
	const column7: Stack = cards.splice(0, 7);
	const deck: Stack = cards;

	column1[0].reveal();
	column2[1].reveal();
	column3[2].reveal();
	column4[3].reveal();
	column5[4].reveal();
	column6[5].reveal();
	column7[6].reveal();

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

const cards: Stack = [
	new Card(1, "heart", false),
	new Card(2, "heart", false),
	new Card(3, "heart", false),
	new Card(4, "heart", false),
	new Card(5, "heart", false),
	new Card(6, "heart", false),
	new Card(7, "heart", false),
	new Card(8, "heart", false),
	new Card(9, "heart", false),
	new Card(10, "heart", false),
	new Card(11, "heart", false),
	new Card(12, "heart", false),
	new Card(13, "heart", false),
	new Card(1, "diamond", false),
	new Card(2, "diamond", false),
	new Card(3, "diamond", false),
	new Card(4, "diamond", false),
	new Card(5, "diamond", false),
	new Card(6, "diamond", false),
	new Card(7, "diamond", false),
	new Card(8, "diamond", false),
	new Card(9, "diamond", false),
	new Card(10, "diamond", false),
	new Card(11, "diamond", false),
	new Card(12, "diamond", false),
	new Card(13, "diamond", false),
	new Card(1, "club", false),
	new Card(2, "club", false),
	new Card(3, "club", false),
	new Card(4, "club", false),
	new Card(5, "club", false),
	new Card(6, "club", false),
	new Card(7, "club", false),
	new Card(8, "club", false),
	new Card(9, "club", false),
	new Card(10, "club", false),
	new Card(11, "club", false),
	new Card(12, "club", false),
	new Card(13, "club", false),
	new Card(1, "spade", false),
	new Card(2, "spade", false),
	new Card(3, "spade", false),
	new Card(4, "spade", false),
	new Card(5, "spade", false),
	new Card(6, "spade", false),
	new Card(7, "spade", false),
	new Card(8, "spade", false),
	new Card(9, "spade", false),
	new Card(10, "spade", false),
	new Card(11, "spade", false),
	new Card(12, "spade", false),
	new Card(13, "spade", false),
];
