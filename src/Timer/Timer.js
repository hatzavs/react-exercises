import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			paused: true,
			play: false
		};
	}
	
	play() {
		if (this.state.play) return;
		this.setState({
			paused: false,
			play: true
		});
		this.seconds = setInterval(() => {
			if (!this.state.paused) {
				this.setState({
					seconds: this.state.seconds + 1
				});
			}
		}, 1000);
	}

	reset() {
		this.setState({
			seconds: 0
		});
	}

	pause() {
		clearInterval(this.seconds);
		this.setState({
			paused: true,
			play: false
		});
	}

	componentWillUnmount() {
		clearInterval(this.seconds);
	}

	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.play.bind(this)}>Play</button>
					<button onClick={this.pause.bind(this)}>Pause</button>
					<button onClick={this.reset.bind(this)}>Reset</button>
				</div>
				<div className="Timer__value">{this.state.seconds}</div>
				<div>{this.state.paused && <span>Timer paused</span>}</div>
			</div>
		)
	}
}

export default Timer;
