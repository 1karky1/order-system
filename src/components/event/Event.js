import React from 'react';
import EventForm from './eventform/EventForm';
import EventBox from './eventbox/EventBox';
import EventHeader from './eventheader/EventHeader';


// Inputs: { formFieldsConfig, formValues, eventData, isValid, inputChanges }
//    event(optional): if exist contains event object
const Event = ({formFieldsConfig, formValues, eventData, isValid, inputChanges}) => {
    return (
        <div className='event-view'>
            <EventHeader/>
            <div className="event">
                <EventForm fields={formFieldsConfig} {...formValues} inputChange={inputChanges}/>
                <EventBox eventData={eventData} formIsValid={isValid}/>
            </div>
        </div>
    )
};

export default Event;