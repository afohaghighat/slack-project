import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels } from "./../actions/channelsActions";
import { fetchMessages } from "./../actions/messagesActions";

class Navbar extends Component {
	state = {};
	componentDidMount() {
		this.props.fetchChannels();
	}

	handleSelectChannel = channelId => {
		this.props.fetchMessages(channelId);
	};

	render() {
		if (this.props.channels === null) return <div />;

		const { channels } = this.props.channels;

		return (
			<div className="app-navbar">
				<div className="navbar-container">
					<div className="navbar-list">
						<h3 className="list-header">Channels</h3>
						<div className="list-container">
							<div className="list-item">
								{channels.map(channel => (
									<Link
										onClick={() => this.handleSelectChannel(channel.id)}
										key={channel.id}
										to={`/messages/${channel.id}`}
										title=""
									>
										<span># {channel.name}</span>
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className="navbar-list">
						<h3 className="list-header">Direct Messages</h3>
						<div className="list-container">
							<div className="list-item">
								<a href={`/teams/`} title="">
									<span>afshin haghighat</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		channels: state.channels,
		messages: state.messages
	};
};

export default connect(
	mapStateToProps,
	{ fetchChannels, fetchMessages }
)(Navbar);
