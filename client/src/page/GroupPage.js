import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";

import { attemptGetPartyMembers } from "../actions/party/getPartyMembersApiCall";
import { attemptGetPartyEvents } from "../actions/party/getPartyEventsApiCall";
import { attemptInvitePartyMember } from "../actions/party/invitePartyMemberApiCall";
import { attemptDeleteUserFromParty } from "../actions/deleteUserFromParty/deleteUserFromPartyApiCall";

import EventsList from '../components/group_page/EventsList.js';
import Memberslist from '../components/group_page/MembersList.js';

class GroupPage extends Component {
    constructor(props) {
        super(props);
        const { partyID } = this.props.match.params;
        this.state = {
            partyID: partyID,
            events: [],
            members: [],
            errors: {}
        };
    }
    
    async componentWillMount() {
        this.props.attemptGetPartyMembers(this.state)
            .then(res => {
                this.setState({
                    members: res.payload
                });
            });
    
        this.props.attemptGetPartyEvents(this.state)
            .then(res => {
                this.setState({
                events: res.payload
                });
            });
    }

    deleteUser = (userID) => {
        const data = {
            userID: userID,
            partyID: this.state.partyID
        }

        this.props.attemptDeleteUserFromParty(data)
            .then(res => {
                this.setState({members: res.payload});
            });
    }

    addUser = (data) => {
        this.props.attemptInvitePartyMember(data)
            .then(res => {
                this.setState({members: res.payload});
            });
    }

    render() {
        return (
            <div>
                <EventsList events={this.state.events}/>
                <Memberslist 
                    partyID={this.state.partyID} 
                    members={this.state.members} 
                    invite={this.props.attemptInvitePartyMember}
                    delete={this.deleteUser}
                />
            </div>
        )
    }
}

//Store
function mapStateToProps(state) {
    return {
      user: state.user,
      data: state.user.data
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ 
        attemptGetPartyEvents,
        attemptGetPartyMembers,
        attemptInvitePartyMember,
        attemptDeleteUserFromParty
     }, dispatch);
}
  
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(GroupPage));
