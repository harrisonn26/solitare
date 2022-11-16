import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dealer from "../game/game";
import {
	Card,
	ColumnID,
	Game,
	Stack,
	StartMove,
	StopMove,
	Suit,
} from "../game/gameTypes";
const gameSliceInitialState: Game = {
	deck: { id: ColumnID.deck, data: [] },
	col1: { id: ColumnID.col1, data: [] },
	col2: { id: ColumnID.col2, data: [] },
	col3: { id: ColumnID.col3, data: [] },
	col4: { id: ColumnID.col4, data: [] },
	col5: { id: ColumnID.col5, data: [] },
	col6: { id: ColumnID.col6, data: [] },
	col7: { id: ColumnID.col7, data: [] },
	flippedDeck: { id: ColumnID.flippedDeck, data: [] },
	home1: { id: ColumnID.home1, data: [] },
	home2: { id: ColumnID.home2, data: [] },
	home3: { id: ColumnID.home3, data: [] },
	home4: { id: ColumnID.home4, data: [] },
};
export const gameSlice = createSlice({
	name: "game",
	initialState: gameSliceInitialState,
	reducers: {
		//populate the game state with a deck of randomly shuffled cards
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
		//updates the status of cards to moving, so children in the stack can be moved
		startMove: (state: Game, action: PayloadAction<StartMove>) => {
			const move = JSON.parse(JSON.stringify(action.payload));
			for (let i = move.index; i < move.stack.data.length; i++) {
				move.stack.data[i].moving = true;
			}

			state = updateStack(state, move.stack);
		},
		//Check move validity, move cards between stacks if necessary and reset position values
		stopMove: (state: Game, action: PayloadAction<StopMove>) => {
			const posOffset = { x: 0, y: 0 };
			const dropId: number = action.payload.dropId;
			const index: number = action.payload.index;
			const stack: Stack = JSON.parse(JSON.stringify(action.payload.stack));
			for (let i = 0; i < stack.data.length; i++) {
				stack.data[i].moving = false;
			}
			state = updateStack(state, stack);

			if (dropId && dropId !== stack.id) {
				if (checkMove(state, dropId, stack.data[index])) {
					const toMove = stack.data.splice(index);
					if (stack.data.length > 0)
						stack.data[stack.data.length - 1].revealed = true;
					state = updateStack(state, stack);
					state = addToStack(state, { id: dropId, data: toMove });
				}
			}
		},
		//draw a new card from the deck to the flippedDeck
		drawDeck: (state: Game) => {
			const deck = state.deck;
			const flippedDeck = state.flippedDeck;
			if (state.deck.data.length > 0) {
				const flippedCard = deck.data.pop();
				flippedDeck.data.push(flippedCard!);
				state.deck = deck;
				state.flippedDeck = flippedDeck;
			} else {
				state.deck.data = flippedDeck.data.reverse();
				state.flippedDeck.data = [];
			}
		},
	},
});

const checkSuit = (suit1: Suit, suit2: Suit): boolean => {
	return (
		((suit1 === "heart" || suit1 === "diamond") &&
			(suit2 === "club" || suit2 === "spade")) ||
		((suit1 === "club" || suit1 === "spade") &&
			(suit2 === "heart" || suit2 === "diamond"))
	);
};
const checkMove = (state: Game, toStack: number, cardToMove: Card): boolean => {
	switch (toStack) {
		case 1:
			if (state.col1.data.length === 0) return cardToMove.value === 13;
			else
				return (
					checkSuit(
						state.col1.data[state.col1.data.length - 1].suit,
						cardToMove.suit
					) &&
					state.col1.data[state.col1.data.length - 1].value - 1 ===
						cardToMove.value
				);
		case 2:
			if (state.col2.data.length === 0) return cardToMove.value === 13;
			else
				return (
					checkSuit(
						state.col2.data[state.col2.data.length - 1].suit,
						cardToMove.suit
					) &&
					state.col2.data[state.col2.data.length - 1].value - 1 ===
						cardToMove.value
				);
		case 3:
			if (state.col3.data.length === 0) return cardToMove.value === 13;
			else
				return (
					checkSuit(
						state.col3.data[state.col3.data.length - 1].suit,
						cardToMove.suit
					) &&
					state.col3.data[state.col3.data.length - 1].value - 1 ===
						cardToMove.value
				);
		case 4:
			if (state.col4.data.length === 0) return cardToMove.value === 13;
			else
				return (
					checkSuit(
						state.col4.data[state.col4.data.length - 1].suit,
						cardToMove.suit
					) &&
					state.col4.data[state.col4.data.length - 1].value - 1 ===
						cardToMove.value
				);
		case 5:
			if (state.col5.data.length === 0) return cardToMove.value === 13;
			else
				return (
					checkSuit(
						state.col5.data[state.col5.data.length - 1].suit,
						cardToMove.suit
					) &&
					state.col5.data[state.col5.data.length - 1].value - 1 ===
						cardToMove.value
				);
		case 6:
			if (state.col6.data.length === 0) return cardToMove.value === 13;
			else
				return (
					checkSuit(
						state.col6.data[state.col6.data.length - 1].suit,
						cardToMove.suit
					) &&
					state.col6.data[state.col6.data.length - 1].value - 1 ===
						cardToMove.value
				);
		case 7:
			if (state.col7.data.length === 0) return cardToMove.value === 13;
			else
				return (
					checkSuit(
						state.col7.data[state.col7.data.length - 1].suit,
						cardToMove.suit
					) &&
					state.col7.data[state.col7.data.length - 1].value - 1 ===
						cardToMove.value
				);
		case 14:
			if (state.home1.data.length === 0) return cardToMove.value === 1;
			else
				return (
					state.home1.data[state.home1.data.length - 1].suit ===
						cardToMove.suit &&
					state.home1.data[state.home1.data.length - 1].value + 1 ===
						cardToMove.value
				);
		case 15:
			if (state.home2.data.length === 0) return cardToMove.value === 1;
			else
				return (
					state.home2.data[state.home2.data.length - 1].suit ===
						cardToMove.suit &&
					state.home2.data[state.home2.data.length - 1].value + 1 ===
						cardToMove.value
				);
		case 16:
			if (state.home3.data.length === 0) return cardToMove.value === 1;
			else
				return (
					state.home3.data[state.home3.data.length - 1].suit ===
						cardToMove.suit &&
					state.home3.data[state.home3.data.length - 1].value + 1 ===
						cardToMove.value
				);
		case 17:
			if (state.home4.data.length === 0) return cardToMove.value === 1;
			else
				return (
					state.home4.data[state.home4.data.length - 1].suit ===
						cardToMove.suit &&
					state.home4.data[state.home4.data.length - 1].value + 1 ===
						cardToMove.value
				);
		default:
			return false;
	}
};

const addToStack = (state: Game, stack: Stack): Game => {
	switch (stack.id) {
		case ColumnID.col1:
			state.col1 = {
				id: ColumnID.col1,
				data: state.col1.data.concat(stack.data),
			};
			return state;
		case ColumnID.col2:
			state.col2 = {
				id: ColumnID.col2,
				data: state.col2.data.concat(stack.data),
			};
			return state;
		case ColumnID.col3:
			state.col3 = {
				id: ColumnID.col3,
				data: state.col3.data.concat(stack.data),
			};
			return state;
		case ColumnID.col4:
			state.col4 = {
				id: ColumnID.col4,
				data: state.col4.data.concat(stack.data),
			};
			return state;
		case ColumnID.col5:
			state.col5 = {
				id: ColumnID.col5,
				data: state.col5.data.concat(stack.data),
			};
			return state;
		case ColumnID.col6:
			state.col6 = {
				id: ColumnID.col6,
				data: state.col6.data.concat(stack.data),
			};
			return state;
		case ColumnID.col7:
			state.col7 = {
				id: ColumnID.col7,
				data: state.col7.data.concat(stack.data),
			};
			return state;
		case ColumnID.home1:
			state.home1 = {
				id: ColumnID.home1,
				data: state.home1.data.concat(stack.data),
			};
			return state;
		case ColumnID.home2:
			state.home2 = {
				id: ColumnID.home2,
				data: state.home2.data.concat(stack.data),
			};
			return state;
		case ColumnID.home3:
			state.home3 = {
				id: ColumnID.home3,
				data: state.home3.data.concat(stack.data),
			};
			return state;
		case ColumnID.home4:
			state.home4 = {
				id: ColumnID.home4,
				data: state.home4.data.concat(stack.data),
			};
			return state;
		default:
			return state;
	}
};

const updateStack = (state: Game, stack: Stack): Game => {
	switch (stack.id) {
		case ColumnID.deck:
			state.deck = stack;
			return state;
		case ColumnID.col1:
			state.col1 = stack;
			return state;
		case ColumnID.col2:
			state.col2 = stack;
			return state;
		case ColumnID.col3:
			state.col3 = stack;
			return state;
		case ColumnID.col4:
			state.col4 = stack;
			return state;
		case ColumnID.col5:
			state.col5 = stack;
			return state;
		case ColumnID.col6:
			state.col6 = stack;
			return state;
		case ColumnID.col7:
			state.col7 = stack;
			return state;
		case ColumnID.flippedDeck:
			state.flippedDeck = stack;
			return state;
		case ColumnID.home1:
			state.home1 = stack;
			return state;
		case ColumnID.home2:
			state.home2 = stack;
			return state;
		case ColumnID.home3:
			state.home3 = stack;
			return state;
		case ColumnID.home4:
			state.home4 = stack;
			return state;
		default:
			return state;
	}
};

export const { deal, startMove, stopMove, drawDeck } = gameSlice.actions;
