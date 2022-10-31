import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dealer from "../game/game";
import { Game, StackMove } from "../game/gameTypes";
const gameSliceInitialState: Game = {
	deck: { id: 0, data: [] },
	col1: { id: 1, data: [] },
	col2: { id: 2, data: [] },
	col3: { id: 3, data: [] },
	col4: { id: 4, data: [] },
	col5: { id: 5, data: [] },
	col6: { id: 6, data: [] },
	col7: { id: 7, data: [] },
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
		moveStack: (state, action: PayloadAction<StackMove>) => {
			const move = action.payload;
			for (let i = move.index; i < move.stack.data.length - 1; i++) {}
		},
	},
});

export const { deal } = gameSlice.actions;
