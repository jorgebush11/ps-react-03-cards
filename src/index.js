import React, { Component } from "react";
import ReactDom from "react-dom";

import "./styles.scss";

const root = document.querySelector("#root");

const testData = [
	{
		name: "Dan Abramov",
		avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
		company: "@facebook"
	},
	{
		name: "Sophie Alpert",
		avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
		company: "Humu"
	},
	{
		name: "Sebastian Markbåge",
		avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
		company: "Facebook"
	}
];

const CardList = (props) => {
	return (
		<div>
			{props.profiles.map((profile) => (
				<Card {...profile} />
			))}
		</div>
	);
};

class Card extends Component {
	render() {
		const profile = this.props;
		return (
			<div className="profile">
				<img src={profile.avatar_url} alt="" />
				<div className="info">
					<div className="name">{profile.name}</div>
					<div className="company">{profile.company}</div>
				</div>
			</div>
		);
	}
}

class Form extends Component {
	userNameInput = React.createRef();

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.userNameInput.current.value);
	};

	render() {
		return (
			<form action="" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="GitHub username"
					ref={this.userNameInput}
				/>
				<button>Add Card</button>
			</form>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profiles: testData
		};
	}

	render() {
		return (
			<div>
				<h1 className="header">{this.props.title}</h1>
				<Form />
				<CardList profiles={this.state.profiles} />
			</div>
		);
	}
}

ReactDom.render(<App title="The GitHub Cards App" />, root);
