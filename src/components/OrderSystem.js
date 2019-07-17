import React from 'react';
import EventCreateUpdate from './EventCreateUpdate';
import Slots from './Slots';
import {defaultExternalEvents, defaultSlots} from './constants';

class OrderSystem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: null,
            eventDropped: false,
            externalEvents: defaultExternalEvents,
            slots: defaultSlots
        };
    };

    onEventDropped = (info) => {
        this.setState({eventDropped: true});
    };

    onEventFormCleared = () => {
        this.setState({eventDropped: false});
    };

    selectEvent = (info) => {
        this.state.slots.forEach(slot => {
            const calendar = slot.calendarRef.current.getApi();
            calendar.getEvents().forEach(event => {
                if (event.id === info.event.id && event.classNames.length === 0) {
                    event.setProp('classNames', 'selected-event');
                    this.setState({selectedEvent: info.event});
                } else {
                    event.setProp('classNames', null);
                    this.setState({selectedEvent: null});
                }
            });
        });
    };

    render() {
        return (
            <div className='flexbox-styles'>
              <div className='order-system'>
                  <EventCreateUpdate events={this.state.externalEvents}
                                     eventDropped={this.state.eventDropped}
                                     onEventFormCleared={this.onEventFormCleared}
                                     selectedEvent={this.state.selectedEvent}/>
                  <Slots slots={this.state.slots}
                         onEventDropped={this.onEventDropped}
                         selectEvent={this.selectEvent}/>
              </div>
            </div>
        );
    }
}

export default OrderSystem;
