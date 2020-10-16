import React, { Component } from "react";
import ReactDom from "react-dom";

import "./styles.scss";

const root = document.querySelector("#root");

class Card extends Component {
	render() {
		return (
			<div className="profile">
				<img src="https://placehold.it/75" alt="" />
				<div className="info">
					<div className="name">Name here...</div>
					<div className="company">Company here...</div>
				</div>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<h1 className="header">{this.props.title}</h1>
				<Card />
			</div>
		);
	}
}

ReactDom.render(<App title="The GitHub Cards App" />, root);
