import React from 'react';
import EventForm from './eventform/EventForm';
import EventBox from './eventbox/EventBox';
import EventHeader from './eventheader/EventHeader';
import EventButtons from './eventbuttons/EventButtons';


const Event = ({formFieldsConfig, formValues, eventData, isValid, inputChanges, eventExists, onEventCanceled, onEventSaved}) => {
    return (
        <div className='event-view'>
            <EventHeader/>
            <div className="event">
                <EventForm fields={formFieldsConfig} {...formValues} inputChange={inputChanges}/>
                {eventExists
                    ? <EventButtons onEventCanceled={onEventCanceled} onEventSaved={onEventSaved} formIsValid={isValid}/>
                    : <EventBox eventData={eventData} formIsValid={isValid}/>
                }
            </div>
        </div>
    )
};

export default Event;