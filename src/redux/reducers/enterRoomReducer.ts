import {ENTER_ROOM} from "../actions/enterRoomActions";

interface EnterRoomState {
	roomId: string | null
}

interface EnterRoomAction {
	type: string;
	payload: string
}

const initialState: EnterRoomState = {
	roomId: null,
}

export const enterRoomReducer = (state = initialState, action: EnterRoomAction) => {
	switch (action.type) {
		case ENTER_ROOM: {
			return {
				...state,
				roomId: action.payload
			}
		}
		default: return state
	}
}
