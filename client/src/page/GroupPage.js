import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";

import { attemptGetPartyMembers } from "../actions/party/getPartyMembersApiCall";
import { attemptGetPartyEvents } from "../actions/party/getPartyEventsApiCall";

import EventsList from '../components/group_page/EventsList.js';
import Memberslist from '../components/group_page/MembersList.js';

class GroupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partyID: 1,
            events: [
                {
                    "name": "Yosemite",
                    "startDate": "04/24/2019",
                    "endDate": "04/25/2019"
                },
                {
                    "name": "Disneyland",
                    "startDate": "04/24/2019",
                    "endDate": "04/25/2019"
                },
                {
                    "name": "Santa Cruz",
                    "startDate": "04/24/2019",
                    "endDate": "04/25/2019"
                },
                {
                    "name": "SF",
                    "startDate": "04/24/2019",
                    "endDate": "04/25/2019"
                }
            ],
            members: [],
            errors: {}
        };
        // this.onMemberClick = this.onClick.bind(this);
        // this.onEventClick = this.onClick.bind(this);
    }
    
    async componentWillMount() {
        console.log("In here");
        //Get List of staff
        this.props.attemptGetPartyMembers({partyID: 1});
        // .then(res => {
        //     console.log('res1', res);
        //     this.setState({
        //         members: res
        //     });
        // });

        // await attemptGetPartyEvents({partyID: 1}).then(res => {
        //     this.setState({
        //       events: res
        //     });
        // });
    }

    // onEventClick = e => {
    //     //e.preventDefault();
    // }

    render() {
        console.log(this.state);

        return (
            <div>
                <h1>Group Page: Group 1</h1> 
                <EventsList events={this.state.events}/>
                <Memberslist partyID={this.state.partyID} members={this.state.members}/>
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
        attemptGetPartyMembers
     }, dispatch);
}
  
export default connect(
    mapStateToProps,
    matchDispatchToProps
  )(withRouter(GroupPage));
