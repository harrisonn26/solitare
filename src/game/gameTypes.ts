import Card from "./card";
export type Suit = "diamond" | "heart" | "spade" | "club";
export type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export type Stack = Array<Card>;
export type Game = {
	deck: Stack;
	col1: Stack;
	col2: Stack;
	col3: Stack;
	col4: Stack;
	col5: Stack;
	col6: Stack;
	col7: Stack;
};
