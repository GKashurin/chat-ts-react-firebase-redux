import { combineReducers } from "redux";
import {enterRoomReducer} from "./enterRoomReducer";

export const rootReducer = combineReducers({
	enterRoom: enterRoomReducer,
})
export type RootState = ReturnType<typeof rootReducer>