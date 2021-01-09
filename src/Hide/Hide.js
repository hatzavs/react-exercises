import React, { Component } from 'react';
import './Hide.scss';

class Hide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShown: true
		};
	}

	hideText() {
		this.setState({
			isShown: false
		});
	}

	render() {
		return (
			<div className="Hide">
				<button onClick={this.hideText.bind(this)}>Hide text now!</button>
				{this.state.isShown && <p>
					You can read this text,
					but if you click the button it should disappear. Forever.
				</p>}
			</div>
		)
	}
}

export default Hide;
