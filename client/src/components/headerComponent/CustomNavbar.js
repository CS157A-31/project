import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { USER_ID } from '../../constant';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { attemptLogout } from '../../actions/attemptLogoutAction';

class CustomNavbar extends Component {
  logout() {
    localStorage.removeItem(USER_ID);
    this.props.attemptLogout();
  }
  render() {
    return (
<<<<<<< HEAD
      <div className='navbar-fixed'>
        <nav className='z-depth-0'>
          <div className='nav-wrapper white'>
            <a
              href='/'
=======
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <a
              to="/"
>>>>>>> updating UI and routing
              style={{
                fontFamily: 'monospace'
              }}
              className='brand-logo black-text'
            >
              <i className='material-icons'>code</i>
              Smart Group Financial
            </a>
<<<<<<< HEAD
            <ul className='right'>
              <li>
                <a
                  href='/'
=======
            <ul className="right">
              <li>
                <a
                  href="/creategroup"
>>>>>>> updating UI and routing
                  style={{
                    fontFamily: 'monospace'
                  }}
                  className=' right black-text'
                >
                  Create Group
                </a>
              </li>
              <li>
                <a
<<<<<<< HEAD
                  href='/'
=======
                  href="/createevent"
>>>>>>> updating UI and routing
                  style={{
                    fontFamily: 'monospace'
                  }}
                  className=' right black-text'
                >
                  Create Event
                </a>
              </li>
              <li>
                <a
<<<<<<< HEAD
                  href='/'
                  onClick={() => this.logout()}
=======
                  href="/"
>>>>>>> updating UI and routing
                  style={{
                    fontFamily: 'monospace'
                  }}
                  className=' right black-text'
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      attemptLogout: attemptLogout
    },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(CustomNavbar);
