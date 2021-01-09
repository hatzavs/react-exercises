import React, { Component } from 'react';
import './RandomNumber.scss';

class RandomNumber extends Component {
	constructor() {
		super();
		this.state = {
			num: ''
		};
	}

	random() {
		this.setState({
			num: Math.floor(Math.random()*100 + 1)
		});
	}

	render() {
		return (
			<div className="RandomNumber">
				<p className="RandomNumber__explanation">
					When clicking on the button, make a random number (between 1-100) to appear in the box.
				</p>

				<button onClick={this.random.bind(this)}>Generate number!</button>
				<div className="box">
					{this.state.num}
				</div>
			</div>
		)
	}
}

export default RandomNumber;
