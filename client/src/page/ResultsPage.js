<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Results from '../components/event/Results';

import { attemptGetResult } from '../apiCall/event/getResultApiCall';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    const { eventID } = this.props.match.params;
    this.state = {
      users: {},
      eventID: eventID,
      list: [],
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";

import Results from "../components/Results";

import { attemptCalculate } from "../actions/attemptCalculate/calculateApiCall";

import { getTokenFromLocalStorage } from "../utils";

class ResultsPage extends Component {
  constructor() {
    super();
    this.state = {
      users: {},
>>>>>>> result page
      errors: {}
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    this.props.attemptGetResult({ eventID: this.state.eventID });
  }

  render() {
    const user = this.props.user || {};
    const list = user.resultList || {};
    const resultArray = [];
    const userArray = Object.keys(list).map(i => list[i]);
    let i = 1;
    userArray.map(user => {
      const newRow = [i, user.payee, user.recipient, user.amount];
      resultArray.push(newRow);
      i += 1;
    });

    const columns = [
      'Number',
      'Payee Email',
      'Recipient Email',
      'Amount Money'
    ];

    return (
      <Results
        data={resultArray}
        eventID={this.state.eventID}
        columns={columns}
=======
  onClickCalculate = e => {
    e.preventDefault();
    console.log("calculate");

    this.props.attemptCalculate({
      average: this.state.average,
      userID: getTokenFromLocalStorage("userID")
    });
  };

  render() {
    const user = this.props.user || {};
    const list = user.list || {};
    const userList = ["john", "stan", "smith"];

    const columns = ["Payee Email", "Recipient Email", "Amount Money"];

    return (
      <Results
        data={userList}
        columns={columns}
        onClickCalculate={e => this.onClickCalculate(e)}
>>>>>>> result page
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
<<<<<<< HEAD
  return bindActionCreators({ attemptGetResult }, dispatch);
=======
  return bindActionCreators({ attemptCalculate }, dispatch);
>>>>>>> result page
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(ResultsPage));
