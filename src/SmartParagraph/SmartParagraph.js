import React, { Component } from 'react';
import './SmartParagraph.scss';

class SmartParagraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hideText: false,
			shownText: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.',
			text: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.'
		};
	}

	handleClick() {
		const newText = this.state.hideText ? this.state.text : this.cut(this.state.text, 100);
		this.setState({
			hideText: !this.state.hideText,
			shownText: newText
		});
	}

	cut(text, num) {
		let textArr = text.split(' ');
		let counter = 0;
		let newText2 = '';
		for (let i=0; i < textArr.length; i++) {
			if (counter + textArr[i].length > num) break;
			newText2 += textArr[i] + ' ';
			counter += textArr[i].length;
		}
		console.log(counter);
		return newText2;
	}

	render() {
		return (
			<div className="SmartParagraph">
				<p className="SmartParagraph__explanation">
					When clicking on "Toggle" button,
					the following paragraph should display only 100 characters.
					The challenge is cutting between words!
					Clicking again should show all of the text back.
				</p>
				<p className="SmartParagraph__value">
					{this.state.shownText}
				</p>
				<button onClick={this.handleClick.bind(this)}>Toggle</button>
				<div>Number of characters: {this.state.shownText.split(' ').join('').length}</div>
			</div>
		)
	}
}

export default SmartParagraph;
