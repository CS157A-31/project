import React from 'react';
import { Link } from 'react-router-dom';

const EventsList = props => {
    return (
        <div>
            <h2>Events</h2>
            <hr></hr>
            {this.props.events.map(event => 
                ( 
                    <div class="row">
                        <div class="col s12 m6">
                            <div class="card small blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">{event.name}</span>
                                    <ul>
                                        <li>{event.location}</li>
                                        <li>{event.start}-{event.end}</li>
                                        <li>{event.time}</li>
                                    </ul>
                                </div>
                                <div class="card-action">
                                    <Link to='/'>Event's Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default EventsList;
