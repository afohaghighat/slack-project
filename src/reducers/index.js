import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import channelsReducer from "./channelsReducer";
import usersReducer from "./usersReducers";

export default combineReducers({
	messages: messagesReducer,
	channels: channelsReducer,
	users: usersReducer
});
