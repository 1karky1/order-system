import React from 'react';
import Calendar from './calendar/Calendar';

const Calendars = ({slots = [], onEventClick, onEventDropped, onEventResize}) => {
    return (
        <div className='calendars'>
            {slots.map((slot, index) => (
                <Calendar key={index}
                          slot={slot}
                          onEventClick={onEventClick}
                          onEventResize={onEventResize}
                          onEventDropped={onEventDropped}/>
            ))}
        </div>
    )
};

export default Calendars;