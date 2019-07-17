import React from 'react';
import Calendar from './calendar/Calendar';

class Slot extends React.Component {
    render() {
        const {calendarRef, events, calendarConfig} = this.props.slot;
        return (
            <div className='slot'>
                <Calendar calendarRef={calendarRef} events={events} calendarConfig={calendarConfig}
                          onEventDropped={this.props.onEventDropped} onEventClick={this.props.selectEvent}/>
            </div>
        );
    }
}

export default Slot;