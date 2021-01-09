import React, { Component } from 'react';
import './LastClick.scss';

class LastClick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxNum: ''
		}
	}
	
	handleClick(e) {
		e.preventDefault();
		this.setState({
			boxNum: e.target.innerHTML
		});
	}

	render() {
		return (
			<div className="LastClick">
				<p>
					There are <b>3</b> buttons.<br />
					Make the box show the number of the last clicked button.
				</p>
				<div className="LastClick__buttons">
					<button onClick={this.handleClick.bind(this)}>1</button>
					<button onClick={this.handleClick.bind(this)}>2</button>
					<button onClick={this.handleClick.bind(this)}>3</button>
				</div>
				<div className="LastClick__box">
					{this.state.boxNum}
				</div>
			</div>
		)
	}
}

export default LastClick;
