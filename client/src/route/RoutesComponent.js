import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Page

<<<<<<< HEAD
import LandingPage from '../page/LandingPage';
import RegisterPage from '../page/RegisterPage';
import LoginPage from '../page/LoginPage';
import GroupPage from '../page/GroupPage';
import HomePage from '../page/HomePage';
import EventPage from '../page/EventPage';
import CreateNewCategory from '../components/CreateNewCategory';
=======
import LandingPage from "../page/LandingPage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import HomePage from "../page/HomePage";
import CreateGroupPage from "../page/CreateGroupPage";
import CreateEventPage from "../page/CreateEventPage";
>>>>>>> updating UI and routing

class RoutesComponent extends Component {
  convertToPrivateComponent(component) {
    const user = this.props.user || {};
    if (user.userID || user.email) {
      return component;
    } else {
      return LoginPage;
    }
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Route exact path='/' component={LandingPage} />
        <Route
          exact
          path='/register'
          component={this.convertToPrivateComponent(RegisterPage)}
        />
        <Route
          exact
          path='/login'
          component={this.convertToPrivateComponent(LoginPage)}
        />
        <Route
          exact
          path='/home'
          component={this.convertToPrivateComponent(HomePage)}
        />
        <Route
          path='/event/:eventID'
          component={this.convertToPrivateComponent(EventPage)}
        />
        <Route
          exact
          path='/new-category-form'
          component={this.convertToPrivateComponent(CreateNewCategory)}
        />
        <Route
          path='/party/:partyID'
          component={this.convertToPrivateComponent(GroupPage)}
        />
=======
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/creategroup" component={CreateGroupPage} />
        <Route exact path="/createevent" component={CreateEventPage} />
>>>>>>> updating UI and routing
      </div>
    );
  }
}

export default RoutesComponent;
