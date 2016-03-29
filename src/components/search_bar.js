import React, { Component }from 'react'

class SearchBar extends Component {
	constructor() {
		super();
		this.state = { term: ''};
	}

	render() {
		return (
			<div>
				<input onChange={ (e) => this.setState({term: e.target.value})}/>
				<p>value input: {this.state.term}</p>
			</div> );

	}

}



export default SearchBar;