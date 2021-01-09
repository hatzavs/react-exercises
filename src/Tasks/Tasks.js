import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myInput: '',
			tasks: []
		};
	}
	
	typing(e) {
		this.setState({
			myInput: e.target.value
		});
	}

	addTask(e) {
		e.preventDefault();
		console.log(this.state.myInput);
		this.setState({
			myInput: '',
			tasks: [...this.state.tasks, this.state.myInput]
		});
		e.target.reset();
	}

	render() {
		return (
			<div className="Tasks">
				<form onSubmit={this.addTask.bind(this)}>
					<h3>Tasks:</h3>
					<p>Make a Todo list (add only):</p>
					<input placeholder="Your task..." onChange={this.typing.bind(this)}/> <button>Add task</button>
					<ul>
						{this.state.tasks.map((task, index) => {
							return <li key={index}>{task}</li>;
						})}
					</ul>
				</form>
			</div>
			
		)
	}
}

export default Tasks;
