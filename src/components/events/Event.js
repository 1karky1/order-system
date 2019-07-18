import React from 'react';
import EventForm from './EventForm'
import EventBox from './EventBox'
import './event.scss'
import {minutesToHourMinutes} from '../../utils/time'


const TITLE_FIELD={
    name: 'eventTitle',
    label: 'Title',
    type: 'text',
    eventDataName: 'title',
    isValid: (value) => {
        return value;
    },
    eventDataValue: (value) => {
        return value;
    }
};
const DURATION_FIELD={
    name: 'eventDuration',
    label: 'Duration',
    type: 'number',
    eventDataName: 'duration',
    isValid: (value) => {
        return value && value >= 30 && value <=1440 && value % 30 === 0;
    },
    eventDataValue: (value) => {
        return minutesToHourMinutes(value);
    }
};
const formFields = [TITLE_FIELD, DURATION_FIELD];


// Inputs: { event, }
//    event(optional): if exist contains event object
class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...this.getInitStateFromFields()};
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.eventDropped) {
            this.setState({...this.getInitStateFromFields()});
            this.props.onEventFormCleared();
        }
    }

    getInitStateFromFields = () => {
        return formFields.reduce((total, field) => ({[field.name]: '', ...total}), {});
    };

    isValid = () => {
        return formFields.every(field => field.isValid(this.state[field.name]));
    };

    inputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    eventData = () => {
        const fields = formFields || [];
        const formData = fields.reduce((total, field) => {
            return {
                [field.eventDataName]: field.eventDataValue(this.state[field.name]),
                ...total
            }}, {});
        return {
            id: Date.now(),
            ...formData,
        }
    };

    render () {
        return (
            <div className="event">
                <EventForm fields={formFields} {...this.state} inputChange={this.inputChange}/>
                <EventBox eventData={this.eventData()} formIsValid={this.isValid()}/>
            </div>
        )
    }
}

export default Event;