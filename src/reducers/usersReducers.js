import * as actionTypes from "../actions/types";

const initialState = null;

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_USERS:
			return state;

		case actionTypes.GET_USER:
			return state;

		default:
			return state;
	}
};

export default usersReducer;
