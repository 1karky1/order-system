import React from 'react';
import Slot from './Slot';

class Slots extends React.Component {
    render() {
        return (
            <div className='slots'>
                {this.props.slots.map((slot, index) => (
                    <Slot key={index}
                          slot={slot}
                          selectEvent={this.props.selectEvent}
                          removeExternalEvent={this.props.removeExternalEvent}/>
                ))}
            </div>
        );
    }
}

export default Slots;