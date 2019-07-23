import React from 'react';
import './eventbuttons.scss';

// Inputs: { formIsValid, fields, }
//    formIsValid(optional | default: false): determine if event form is valid
//    fields(optional | default: []): list of Event form fields
const EventButtons = ({onEventCanceled, onEventSaved, formIsValid}) => {
    return (
        <div className="event-buttons">
            {formIsValid &&
            <div className="">
                <button type="button" onClick={onEventSaved}> Save </button>
                <button type="button" onClick={onEventCanceled}> Cancel </button>
            </div>
            }
        </div>
    )
};

export default EventButtons;