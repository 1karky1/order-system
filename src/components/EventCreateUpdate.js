import React from 'react';
import Event from './events/Event'

class EventCreateUpdate extends React.Component {

    render() {
        return (
            <div className='external-events' id="external-events">
                <div className='header'>
                    <h2>Create event</h2>
                </div>
                <Event eventDropped={this.props.eventDropped} onEventFormCleared={this.props.onEventFormCleared}/>
            </div>
        );
    }
}

export default EventCreateUpdate;