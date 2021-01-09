import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			className: 'text-box'
		};
	}
	
	typing(e) {
		this.setState({
			input: e.target.value,
			className: e.target.value.includes('yay') ? 'text-box yay' : 'text-box'
		});
	}

	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" value={this.state.input} className={this.state.className} onChange={this.typing.bind(this)}/>
			</div>
		)
	}
}

export default YayValidator;
