import { createSlice } from "@reduxjs/toolkit";
import dealer from "../game/game";
import { Game } from "../game/gameTypes";
const gameSliceInitialState: Game = {
	col1: [],
	col2: [],
	col3: [],
	col4: [],
	col5: [],
	col6: [],
	col7: [],
	deck: [],
};
export const gameSlice = createSlice({
	name: "game",
	initialState: gameSliceInitialState,
	reducers: {
		deal: (state) => {
			const newDeck = dealer();
			state.col1 = newDeck.col1;
			state.col2 = newDeck.col2;
			state.col3 = newDeck.col3;
			state.col4 = newDeck.col4;
			state.col5 = newDeck.col5;
			state.col6 = newDeck.col6;
			state.col7 = newDeck.col7;
			state.deck = newDeck.deck;
		},
	},
});

export const { deal } = gameSlice.actions;
