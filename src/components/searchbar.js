import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props) {  //init state
    super(props); //calling parent method

    this.state = { term: '' }; //sets up empty state
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
