import React from 'react';
import Calendar from './calendar/Calendar';

const Calendars = ({slots = [], onEventClick, onEventDropped}) => {
    return (
        <div className='calendars'>
            {slots.map((slot, index) => (
                <Calendar key={index}
                          slot={slot}
                          onEventClick={onEventClick}
                          onEventDropped={onEventDropped}/>
            ))}
        </div>
    )
};

export default Calendars;