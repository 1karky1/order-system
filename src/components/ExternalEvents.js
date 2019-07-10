import React from 'react';
import ExternalEvent from './ExternalEvent'
import { Draggable } from "@fullcalendar/interaction";

class ExternalEvents extends React.Component {

    componentDidMount() {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".ext-event",
        });
    };

    render() {
        return (
            <div className='external-events' id="external-events">
                <div className='header'>
                    <h2>External events</h2>
                </div>
                {this.props.events.map(event => (
                    <ExternalEvent event={event} key={event.id} />
                ))}
            </div>
        );
    }
}

export default ExternalEvents;