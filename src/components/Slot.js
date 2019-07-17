import React from 'react';
import Calendar from './calendar/Calendar';

const Slot = ({slot, onEventDropped, selectEvent}) => {
    const {calendarRef, events, calendarConfig} = slot;
    return (
        <div className='slot'>
            <Calendar calendarRef={calendarRef} events={events} calendarConfig={calendarConfig}
                      onEventDropped={onEventDropped} onEventClick={selectEvent}/>
        </div>
    )
};

export default Slot;
