import {
	combineReducers,
	configureStore,
	ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gameSlice } from "./gameSlice";
import undoable from "redux-undo";

const store = configureStore({
	reducer: undoable(combineReducers({ game: gameSlice.reducer })),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
