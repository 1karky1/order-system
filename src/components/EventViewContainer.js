import React from 'react';
import Event from './event/Event'
import {connect} from "react-redux";
import {formFieldsConfig, inputChanges, resetEventView} from "../actions/eventView";
import {clearSelectedEvent} from "../actions/calendarsView";
import {unselectEvent} from "../utils/fullcalendar";


class EventViewContainer extends React.Component {

    getFormFields = () => {
        return formFieldsConfig || [];
    };

    isValid = () => {
        return this.getFormFields().every(field => field.isValid(this.props.formValues[field.name]));
    };

    getEventData = () => {
        const formData = this.getFormFields().reduce((total, field) => {
            return {
                [field.eventDataName]: field.eventDataValue(this.props.formValues[field.name]),
                ...total
            }
        }, {});
        return {
            id: Date.now(),
            ...formData,
        }
    };

    eventExists = () => {
        return !!this.props.selectedEvent;
    };

    onEventCanceled = () => {
        this.props.clearSelectedEvent();
        this.props.resetEventView();
        unselectEvent(this.props.calendars);
    };

    onEventSaved = () => {
        this.getFormFields().forEach(field => {
            field.updateFullCalendarEvent(this.props.selectedEvent, this.props.formValues[field.name]);
        });
        this.onEventCanceled();
    };

    render() {
        return (
            <Event formFieldsConfig={this.getFormFields()} formValues={this.props.formValues}
                   eventExists={this.eventExists()} isValid={this.isValid()} eventData={this.getEventData()}
                   inputChanges={this.props.inputChanges} onEventCanceled={this.onEventCanceled}
                   onEventSaved={this.onEventSaved}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formValues: state.eventView.formValues,
        calendars: state.calendarsView.calendars,
        selectedEvent: state.calendarsView.selectedEvent
    }
};

const mapDispatchToProps = {inputChanges, clearSelectedEvent, resetEventView};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventViewContainer);
