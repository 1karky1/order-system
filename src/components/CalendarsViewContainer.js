import React from 'react';
import {connect} from 'react-redux';
import Calendars from './calendars/Calendars';
import {resetEventView} from '../actions/eventView'
import {selectedEventChanges} from '../actions/calendarsView'
import {selectUnselectEvent} from '../utils/fullcalendar'


class CalendarsViewContainer extends React.Component {

    onEventClick = (info) => {
        selectUnselectEvent(this.props.calendars, info.event.id);
        this.props.selectedEventChanges(this.props.selectedEvent, info.event);
        this.props.resetEventView();
    };

    onEventDrop = () => {
        this.props.resetEventView();
    };

    onEventResize = (info) => {
        this.props.selectedEventChanges(null, info.event);
        this.props.resetEventView();
    };

    render() {
        return (
            <Calendars slots={this.props.calendars} onEventClick={this.onEventClick} onEventResize={this.onEventResize}
                       onEventDropped={this.onEventDrop}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        calendars: state.calendarsView.calendars,
        selectedEvent: state.calendarsView.selectedEvent
    }
};

const mapDispatchToProps = {resetEventView, selectedEventChanges};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarsViewContainer)