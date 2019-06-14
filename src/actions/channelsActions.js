import * as actionTypes from "./types";
import axios from "axios";

export const fetchChannels = () => dispatch => {
	const token = "MY_TOKEN_REMOVED_IN_GITHUB";
	axios
		.get(`https://slack.com/api/conversations.list?token=${token}`)
		.then(res => {
			dispatch({
				type: actionTypes.GET_CHANNELS,
				payload: res.data.channels
			});
		})
		.catch(err =>
			dispatch({
				type: actionTypes.GET_CHANNELS,
				payload: {}
			})
		);
};
