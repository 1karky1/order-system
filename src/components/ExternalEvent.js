import React from 'react';

class ExternalEvent extends React.Component {
    render () {
        let {event} = this.props;
        return (
            <div className="ext-event"
                 data-event={JSON.stringify(event)}
                 key={event.id}>
                {event.title}
            </div>
        )
    }
}

export default ExternalEvent;