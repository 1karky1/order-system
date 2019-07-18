import React from 'react';
import EventCreateUpdate from './EventCreateUpdate';
import CalendarsViewContainer from './CalendarsViewContainer';

class OrderSystem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: null,
            eventDropped: false,
        };
    };

    onEventFormCleared = () => {
        this.setState({eventDropped: false});
    };

    render() {
        return (
            <div className='flexbox-styles'>
                <div className='order-system'>
                    <EventCreateUpdate
                        eventDropped={this.state.eventDropped}
                        onEventFormCleared={this.onEventFormCleared}
                        selectedEvent={this.state.selectedEvent}/>
                    <CalendarsViewContainer />
                </div>
            </div>
        );
    }
}

export default OrderSystem;
