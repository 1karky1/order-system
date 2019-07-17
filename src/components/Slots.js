import React from 'react';
import Slot from './Slot';

const Slots = ({slots = [], selectEvent, onEventDropped}) => {
    return (
        <div className='slots'>
            {slots.map((slot, index) => (
                <Slot key={index}
                      slot={slot}
                      selectEvent={selectEvent}
                      onEventDropped={onEventDropped}/>
            ))}
        </div>
    )
};

export default Slots;