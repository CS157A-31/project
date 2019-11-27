import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";

import { attemptGetPartyMembers } from "../actions/party/getPartyMembersApiCall";
import { attemptGetPartyEvents } from "../actions/party/getPartyEventsApiCall";

import EventsList from '../group_page/EventsList.js';
import Memberslist from '../group_page/MembersList.js';

class GroupPage extends Component {
    constructor() {
        super();
        this.state = {
            group: {},
            events: [],
            members: [],
            errors: {}
        };
        this.onMemberClick = this.onClick.bind(this);
        this.onEventClick = this.onClick.bind(this);
    }
    
    onMemberClick = e => {
        e.preventDefault();
    
        // this.props.attemptLogin({
        //   email: this.state.email,
        //   password: this.state.password
        // });
    };

    onEventClick = e => {
        e.preventDefault();
    }

    render() {
        const errors = { ...this.state.errors };
        const group = { ...this.state.group };
        const events = { ...this.state.events };
        const members = { ...this.props.members };

        return (
            <div>
                <h1>Group Page: {group.name}</h1> 
                <EventsList events={events}/>
                <Memberslist members={members}/>
            </div>
        )
    }
}

// Store
// function mapStateToProps(state) {
//     return {
//       user: state.user,
//       data: state.user.data
//     };
// }
  
//   function matchDispatchToProps(dispatch) {
//     return bindActionCreators({ attemptLogin }, dispatch);
//   }
  
export default connect(
    mapStateToProps,
    matchDispatchToProps
  )(withRouter(GroupPage));
