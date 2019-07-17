import React from 'react';
import {Draggable} from "@fullcalendar/interaction";

// Inputs: { formIsValid, fields, }
//    formIsValid(optional | default: false): determine if event form is valid
//    fields(optional | default: []): list of Event form fields
class EventBox extends React.Component {

    componentDidMount() {
        let draggableEl = document.getElementById("event-box");
        new Draggable(draggableEl, {
            itemSelector: ".ext-event",
        });
    };

    render() {
        const isValid = this.props.formIsValid || false;
        const eventData = this.props.eventData;
        return (
            <div id="event-box">
                {isValid &&
                <div className="ext-event"
                     data-event={JSON.stringify(eventData)}>
                    {eventData.title}
                </div>}
            </div>
        )
    }
}

export default EventBox;