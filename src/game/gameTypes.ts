export type Suit = "diamond" | "heart" | "spade" | "club";
export type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export type Card = {
	value: Value;
	suit: Suit;
	revealed: boolean;
	moving: boolean;
};
export type Stack = { id: number; data: Array<Card> };
export type Game = {
	deck: Stack;
	col1: Stack;
	col2: Stack;
	col3: Stack;
	col4: Stack;
	col5: Stack;
	col6: Stack;
	col7: Stack;
	flippedDeck: Stack;
	home1: Stack;
	home2: Stack;
	home3: Stack;
	home4: Stack;
};
export type StartMove = {
	stack: Stack;
	index: number;
};
export type StopMove = {
	stack: Stack;
	dropId: number;
	index: number;
};
export type ColumnCoords = {
	col1: number;
	col2: number;
	col3: number;
	col4: number;
	col5: number;
	col6: number;
	col7: number;
};
export enum ColumnID {
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
}
