import React, { Component } from 'react';
import AddMemberModal from './addMemberModal';

const MembersList = props => {
    console.log(props);

    return ( 
        <div>
            <div class='row valign-wrapper'>
                <div class="col s5">
                    <h3> Group Members </h3>
                </div>
                <AddMemberModal partyID={props.partyID}/>
            </div>
            <hr></hr>
            <ul class="collection with-header">
                {props.members.map(member =>  
                    <li class="collection-item"><div>{member.email}<button class="secondary-content valign-wrapper"><i class="material-icons">remove</i></button></div></li>
                )}
            </ul>
        </div>
    );
}

export default MembersList;