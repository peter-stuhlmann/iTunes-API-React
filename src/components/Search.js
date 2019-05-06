import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <React.Fragment>
        <input type="text" id="filter-input" placeholder="Enter a keyword ..." />
      </React.Fragment>
    );
  }
}