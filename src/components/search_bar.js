import React, { Component }from 'react'

class SearchBar extends Component {
	constructor() {
		super();
		this.state = { term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input onChange={ (e) => this.onInputChange(e.target.value)}/>
			</div> );

	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}



export default SearchBar;