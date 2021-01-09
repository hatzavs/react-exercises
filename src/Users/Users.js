import React, { Component } from 'react';
import './Users.scss';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}
	
	componentDidMount() {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/users.json')
		.then(res => res.json())
		.then(users => {
			this.setState({
				users
			});
		});
	}

	render() {
		return (
			<div className="Users">
				<h3>Users:</h3>
				<p>
					Use the following API to make a list of user names:<br />
					<code>https://netcraft2.s3-eu-west-1.amazonaws.com/users.json</code>
				</p>
				<ul>
					{this.state.users.map((user, index) => {
						return <li key={index}>{user.name}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Users;
