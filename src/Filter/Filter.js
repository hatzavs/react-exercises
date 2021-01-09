import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			list: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			myInput: ''
		};
	}

	filter(e) {
		this.setState({
			myInput: e.target.value,
			items: this.state.list.filter(item => item.includes(e.target.value))
		});
		
	}

	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={this.filter.bind(this)}/>
				<ul>
					{this.state.items.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Filter;
