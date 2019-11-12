import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
        this.onChange = this.onChange.bind(this);
<<<<<<< HEAD
        this.onMemberClick = this.onClick.bind(this);
        this.onEventClick = this.onClick.bind(this);
=======
        this.onClick = this.onClick.bind(this);
>>>>>>> Initial setup for group page
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    
<<<<<<< HEAD
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

=======
    onClick = e => {
        e.preventDefault();
    
        this.props.attemptLogin({
          email: this.state.email,
          password: this.state.password
        });
    };

>>>>>>> Initial setup for group page
    render() {
        const errors = { ...this.state.errors };
        const group = { ...this.state.group };
        const events = { ...this.state.events };
        const members = { ...this.props.members };

        return (
            <div>
                <h1>Group Page: {group.name}</h1> 
                <EventList events={events}/>
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
