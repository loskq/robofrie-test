import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <h1>Ooops. That's not good.</h1>
		}
		return this.props.children //means return the component thats in ErrorBoundry
	}
}

export default ErrorBoundry;