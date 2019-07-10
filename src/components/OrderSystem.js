import React from 'react';
import ExternalEvents from './ExternalEvents';
import Slots from './Slots';
import {defaultExternalEvents, defaultSlots} from './constants';

class OrderSystem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: null,
            externalEvents: defaultExternalEvents,
            slots: defaultSlots
        };
    }

    removeExternalEvent = (info) => {
        this.setState({externalEvents: this.state.externalEvents.filter(event => event.id !== info.event.id)});
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
                  <ExternalEvents events={this.state.externalEvents}
                                  selectedEvent={this.state.selectedEvent}/>
                  <Slots slots={this.state.slots}
                         removeExternalEvent={this.removeExternalEvent}
                         selectEvent={this.selectEvent}/>
              </div>
            </div>
        );
    }
}

export default OrderSystem;