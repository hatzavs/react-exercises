import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// days: [],
			hotDay: 0,
			coldDay: 0
		};
	}
	

	findHotColdDay(days) {
		let highTemp = days[0].temperature;;
		let lowTemp = days[0].temperature;
		let hottestDay = 0;
		let coldestDay = 0;
		days.forEach(day => {
			if (day.temperature > highTemp) {
				highTemp = day.temperature;
				hottestDay = day.day;
			}
			if (day.temperature < lowTemp) {
				lowTemp = day.temperature;
				coldestDay = day.day;
			}
		});
		this.setState({
			hotDay: hottestDay,
			coldDay: coldestDay
		});
	}

	componentDidMount() {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
		.then(res => res.json())
		.then(this.findHotColdDay.bind(this));
	}

	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is: {this.state.hotDay}</strong>
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is: {this.state.coldDay}</strong>
				</div>
			</div>
		)
	}
}

export default Weather;
