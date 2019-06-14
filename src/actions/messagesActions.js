import * as actionTypes from "./types";
import axios from "axios";

export const fetchMessages = messageId => dispatch => {
	const token = "MY_TOKEN_REMOVED_IN_GITHUB";
	axios
		.get(
			`https://slack.com/api/conversations.history?token=${token}&channel=${messageId}`
		)
		.then(res => {
			dispatch({
				type: actionTypes.GET_MESSAGES,
				payload: res.data.messages
			});
		})
		.catch(err =>
			dispatch({
				type: actionTypes.GET_MESSAGES,
				payload: {}
			})
		);
};

export const sendMessage = data => dispatch => {
	console.log(data);
	// const message = {
	// 	channel: `${data.currentChannellId}`,
	// 	text: data.text
	// };
	const message = {
		text: "I am a test message http://slack.com",
		attachments: [
			{
				text: "And here’s an attachment!"
			}
		]
	};
	const token = "MY_TOKEN_REMOVED_IN_GITHUB";

	const config = {
		"Content-Type": "application/x-www-form-urlencoded",
		Authorization: `Bearer ${token}`
	};
	axios
		.post("https://slack.com/api/chat.postMessage", message, config)
		.then(res => {
			console.log(res);
			dispatch({
				type: actionTypes.SEND_MESSAGE,
				payload: res.data.messages
			});
		})
		.catch(err =>
			dispatch({
				type: actionTypes.SEND_MESSAGE,
				payload: {}
			})
		);
};

export const deleteMessage = data => dispatch => {
	console.log(data);
	const message = {
		channel: data.currentChannelId,
		ts: data.ts
	};
	const token = "MY_TOKEN_REMOVED_IN_GITHUB";

	const config = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`
	};
	axios
		.post("https://slack.com/api/chat.delete", JSON.stringify(message), config)
		.then(res => {
			console.log(res);
			dispatch({
				type: actionTypes.DELETE_MESSAGE,
				payload: data
			});
		})
		.catch(err =>
			dispatch({
				type: actionTypes.DELETE_MESSAGE,
				payload: {}
			})
		);
};
