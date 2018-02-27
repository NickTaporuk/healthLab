// @flow
import React, { Component } from 'react';

type Props = {};

class Persons extends Component<Props> {
  props: Props;

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Persons</h2>
      </div>
    );
  }
}

export default Persons;
