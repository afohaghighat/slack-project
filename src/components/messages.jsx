import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	fetchMessages,
	sendMessage,
	deleteMessage
} from "./../actions/messagesActions";

class Messages extends Component {
	state = {
		message: { text: "" },
		currentChannelId: "",
		errors: {}
	};

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.messages === null)
			this.props.fetchMessages(this.props.match.params.id);

		this.setState({ currentChannelId: this.props.match.params.id });
	}

	handleSubmit = e => {
		e.preventDefault();

		const message = {
			text: e.target.message.value,
			currentChannelId: this.state.currentChannelId
		};

		this.props.sendMessage(message, this.props.history);
	};

	handleDeleteMessage = messageTs => {
		const data = {
			currentChannelId: this.state.currentChannelId,
			ts: messageTs
		};

		this.props.deleteMessage(data);
	};

	render() {
		if (this.props.messages === null) return <div />;

		const { messages } = this.props.messages;

		console.log(messages);

		return (
			<div className="messages-container">
				<div className="message-wrapper">
					{messages.map((msg, i) => (
						<div key={i} className="message-item">
							<Link to={`/team/${msg.user}`} className="user-img">
								<img
									alt=""
									src="https://ca.slack-edge.com/TKGFU1HM3-UKJKV0B7G-g8f5da61a42b-48"
								/>
							</Link>
							<div className="msg">
								<Link to={`/team/${msg.user}`} className="user-name">
									afshin.hagigat
								</Link>
								<p className="msg-body">{msg.text}</p>
							</div>
							<div className="msg-actions">
								<ul>
									<li onClick={() => this.handleDeleteMessage(msg.ts)}>
										<i className="fa fa-trash" />
									</li>
									<li>
										<i className="fa fa-reply" />
									</li>
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="form-container">
					<form className="messages-form" onSubmit={this.handleSubmit}>
						<input
							name="message"
							id="message"
							className="message-input"
							type="text"
							placeholder="Message"
						/>
						<button className="attach-btn">+</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		messages: state.messages,
		channels: state.channels
	};
};

export default connect(
	mapStateToProps,
	{ fetchMessages, sendMessage, deleteMessage }
)(Messages);
