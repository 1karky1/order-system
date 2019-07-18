import React from 'react';
import FullCalendarWrapper from '../fullcalendarwrapper/FullCalendarWrapper';

const Calendar = ({slot, onEventDropped, onEventClick}) => {
    const {calendarRef, events, calendarConfig} = slot;
    return (
        <div className='calendar'>
            <FullCalendarWrapper calendarRef={calendarRef} events={events} calendarConfig={calendarConfig}
                                 onEventDropped={onEventDropped} onEventClick={onEventClick}/>
        </div>
    )
};

export default Calendar;
