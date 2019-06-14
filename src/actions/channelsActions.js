import * as actionTypes from "./types";
import axios from "axios";

export const fetchChannels = () => dispatch => {
	const token =
		"xoxp-662538051717-664675011254-662259487620-7c261455f9eb61beb2898c63e8049c18";
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
