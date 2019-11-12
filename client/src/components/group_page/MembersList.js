import React, { Component } from 'react'

const MembersList = props => {
    return ( 
        <div>
            <h2>Group Members</h2>
            <hr></hr>
            <ul class="collection with-header">
                {props.members.map(member =>  
                    <li class="collection-item"><div>{member.email}<a href="#!" class="secondary-content"><i class="material-icons">remove</i></a></div></li>
                )}
            </ul>
        </div>
    );
}

export default EventCard;