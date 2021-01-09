import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}

	increase() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		return (
			<div className="Counter">
				<p>Make the button increase the value:</p>
				<button onClick={this.increase.bind(this)}>Increase</button>
				<div className="Counter__value">{this.state.counter}</div>
			</div>
		)
	}
}

export default Counter;
