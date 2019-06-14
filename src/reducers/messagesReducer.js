import * as actionTypes from "../actions/types";

const initialState = null;

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_MESSAGES:
			return { ...state, messages: action.payload };

		case actionTypes.SEND_MESSAGE:
			return { ...state, messages: action.payload };

		case actionTypes.DELETE_MESSAGE:
			return {
				messages: state.messages.filter(msg => msg.ts !== action.payload.ts)
			};

		default:
			return state;
	}
};

export default messagesReducer;
