import * as actionTypes from "./types";
import axios from "axios";

export const fetchUser = userId => dispatch => {
	const token = "MY_TOKEN_REMOVED_IN_GITHUB";
	axios
		.get(`https://slack.com/api/users.info?token=${token}&channel=${messageId}`)
		.then(res => {
			dispatch({
				type: actionTypes.GET_USERS,
				payload: res.data.messages
			});
		})
		.catch(err =>
			dispatch({
				type: actionTypes.GET_USERS,
				payload: {}
			})
		);
};
