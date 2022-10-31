import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dealer from "../game/game";
import { Game, Stack, StackMove, StopMove } from "../game/gameTypes";
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
		moveStack: (state: Game, action: PayloadAction<StackMove>) => {
			const move = JSON.parse(JSON.stringify(action.payload));
			for (let i = move.index; i < move.stack.data.length; i++) {
				move.stack.data[i].posOffset = move.posOffset;
			}

			state = updateStack(state, move.stack);
		},
		stopMove: (state: Game, action: PayloadAction<StopMove>) => {
			const posOffset = { x: 0, y: 0 };
			const dropId: number = action.payload.dropId;
			const index: number = action.payload.index;
			const stack: Stack = JSON.parse(JSON.stringify(action.payload.stack));
			for (let i = 0; i < stack.data.length; i++) {
				stack.data[i].posOffset = posOffset;
			}
			state = updateStack(state, stack);

			if (dropId && dropId !== stack.id) {
				const toMove = stack.data.splice(index);
				if (stack.data.length > 0)
					stack.data[stack.data.length - 1].revealed = true;
				state = updateStack(state, stack);
				state = addToStack(state, { id: dropId, data: toMove });
			}
		},
	},
});

const addToStack = (state: Game, stack: Stack) => {
	switch (stack.id) {
		case 1:
			state.col1 = { id: 1, data: state.col1.data.concat(stack.data) };
			return state;
		case 2:
			state.col2 = { id: 2, data: state.col2.data.concat(stack.data) };
			return state;
		case 3:
			state.col3 = { id: 3, data: state.col3.data.concat(stack.data) };
			return state;
		case 4:
			state.col4 = { id: 4, data: state.col4.data.concat(stack.data) };
			return state;
		case 5:
			state.col5 = { id: 5, data: state.col5.data.concat(stack.data) };
			return state;
		case 6:
			state.col6 = { id: 6, data: state.col6.data.concat(stack.data) };
			return state;
		case 7:
			state.col7 = { id: 7, data: state.col7.data.concat(stack.data) };
			return state;
		default:
			return state;
	}
};

const updateStack = (state: Game, stack: Stack) => {
	switch (stack.id) {
		case 0:
			state.deck = stack;
			return state;
		case 1:
			state.col1 = stack;
			return state;
		case 2:
			state.col2 = stack;
			return state;
		case 3:
			state.col3 = stack;
			return state;
		case 4:
			state.col4 = stack;
			return state;
		case 5:
			state.col5 = stack;
			return state;
		case 6:
			state.col6 = stack;
			return state;
		case 7:
			state.col7 = stack;
			return state;
		default:
			return state;
	}
};

export const { deal, moveStack, stopMove } = gameSlice.actions;
