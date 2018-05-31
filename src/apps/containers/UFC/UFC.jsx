import React, { Component } from 'react';
import Searcher from './Searcher';
import NextEvent from './NextEvent';


class UFC extends Component {
  render() {
    return (
      <div>
        <NextEvent />
        <Searcher />
      </div>
    );
  }
}

export default UFC;
