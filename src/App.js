import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Messages from "./components/messages";

class App extends Component {
	state = {};
	render() {
		return (
			<div className="main-container">
				<Navbar />
				<Switch>
					<Route path="/messages/:id" component={Messages} />
				</Switch>
			</div>
		);
	}
}

export default App;
