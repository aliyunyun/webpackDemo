import React, {Component} from 'react';
require("../styles/index.css");

export default class App extends Component {
	render() {

		let path = require("../images/1.png");
		return (<div>
				<h1 className = "root-hello">hello is a react!!</h1>
				<div>i am yours x</div>
				<div>cube cube cube 12 12</div>
				<img src={path} />
			</div>);
	}
} 