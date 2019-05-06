import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.props.searchTerm} id="filter-input" placeholder="Enter a keyword ..." onChange={this.props.onSearchInputChangeHandler} />
      </React.Fragment>
    );
  }
}