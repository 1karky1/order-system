import React from 'react';
import FullCalendarWrapper from '../fullcalendarwrapper/FullCalendarWrapper';

const Calendar = ({slot, onEventDropped, onEventClick, onEventResize}) => {
    const {calendarRef, events, calendarConfig} = slot;
    return (
        <div className='calendar'>
            <FullCalendarWrapper calendarRef={calendarRef} events={events} calendarConfig={calendarConfig}
                                 onEventDropped={onEventDropped} onEventClick={onEventClick}
                                 onEventResize={onEventResize}/>
        </div>
    )
};

export default Calendar;
