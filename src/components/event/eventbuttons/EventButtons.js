import React from 'react';
import './eventbuttons.scss';

// Inputs: { formIsValid, fields, }
//    formIsValid(optional | default: false): determine if event form is valid
//    fields(optional | default: []): list of Event form fields
const EventButtons = ({onEventCanceled}) => {
    return (
        <div id="event-buttons">
            <button type="button"> Save </button>
            <button type="button" onClick={onEventCanceled}> Cancel </button>
        </div>
    )
};

export default EventButtons;