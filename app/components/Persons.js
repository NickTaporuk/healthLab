import React, { Component } from 'react';
import Tables from './Tables/Tables';
import Calendar from './Calendar/Calendar';

class Persons extends Component {
  setUsersData() {
    const { getUsers } = this.props;

    getUsers(({ type: 'GET_USERS', data: [{ id: 1, name: 'TEST U1' }] }));
  }

  render() {
    const { persons } = this.props;
    return (
      <div>
        <h2>Persons</h2>
        <button onClick={this.setUsersData.bind(this)} >Test</button>
        { persons.length > 0
          ? persons.map((item) =>
            (<div><span>{item.id}</span>/<span>{item.name}</span></div>))
          : null}
        <Tables />
        <Calendar />
      </div>
    );
  }
}

export default Persons;
