import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptContribute } from '../actions/attemptContribute/contributeApiCall';
import { attemptCalculate } from '../actions/attemptCalculate/calculateApiCall';
import { attemptGetEventDetail } from '../actions/attemptgetEventDetail/getEventDetailApiCall';

import Event from '../components/Event';

import { getTokenFromLocalStorage } from '../utils';

class EventPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
      moneyAmount: '',
      average: 0,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentWillMount() {
    this.props.attemptGetEventDetail({ eventID: 1 });
  }

  onClickCalculate = e => {
    e.preventDefault();

    this.props.attemptCalculate({
      average: this.state.average,
      userID: getTokenFromLocalStorage('userID')
    });
  };

  onClickAddNewRow = e => {
    const currentState = Object.assign({}, this.state);

    const newRow = ['', '', ''];
    currentState.data.push(newRow);
    this.setState(currentState, () => {});
  };

  onClickContribute = e => {
    e.preventDefault();
    // Add a new row
    const newRow = ['', '', ''];

    this.state.data.push(newRow);

    this.props.attemptContribute({
      name: this.state.name,
      moneyAmount: this.state.moneyAmount,
      userID: getTokenFromLocalStorage('userID')
    });
  };

  render() {
    const columns = ['Category', 'Amount Money', 'Total'];

    // const data = [
    //   ['Joe James', 'Test Corp', 'Yonkers'],
    //   ['John Walsh', 'Test Corp', 'Hartford'],
    //   ['Bob Herm', 'Test Corp', 'Tampa'],
    //   ['James Houston', 'Test Corp', 'Dallas']
    // ];

    const options = { filterType: 'checkbox' };

    // const data = { ...this.state.date };

    const errors = { ...this.state.errors };
    const user = this.props.user || {};
    const { userID, data } = user;
    console.log('User is: ' + user);

    return (
      <Event
        data={data}
        columns={columns}
        options={options}
        onClickCalculate={e => this.onClick(e)}
        onClickContribute={e => this.onClick(e)}
        onClickAddNewRow={e => this.onClick(e)}
      />
    );
  }
}

// Store
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { attemptCalculate, attemptContribute, attemptGetEventDetail },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(EventPage));
