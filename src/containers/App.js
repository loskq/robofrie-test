import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {robots} from '../robots';  //added b/c the fake api user list isnt working - to define robots on line 14. 
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())
	// 		.then(users => this.setState({robots: users}))
	// }

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value}) //to make the searchfield update what it has
	}

	render() {
		const { robots, searchfield} = this.state
		const filteredRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //return that returns this true
		})
			return !robots.length ?
				<h1>Loading</h1> :		
				(
					<div className='tc'>
						<h1 className='f2'>RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<ErrorBoundry>
								<CardList robots={filteredRobot} />
							</ErrorBoundry>
						</Scroll>
						
					</div>	
	);

	}
}

export default App;

