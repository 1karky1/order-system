import React from 'react';
import {connect} from 'react-redux';
import Calendars from './calendars/Calendars';
import {resetEventView} from '../actions/eventView'


class CalendarsViewContainer extends React.Component {

    selectUnselectEvent = (clickedEventId) => {
        this.forEachEvent( event => {
            if (event.id === clickedEventId && event.classNames.length === 0) {
                event.setProp('classNames', 'selected-event');
            } else {
                event.setProp('classNames', null);
            }
        });
    };

    forEachEvent = (callback) => {
        this.forEachCalendar(calendar => {
            this.getCalendarAPI(calendar).getEvents().forEach(event => callback(event));
        });
    };

    forEachCalendar = (callback) => {
        this.props.calendars.forEach(calendar => callback(calendar));
    };

    getCalendarAPI = (calendar) => {
        return calendar.calendarRef.current.getApi();
    };

    onEventClick = (info) => {
        this.selectUnselectEvent(info.event.id);
    };

    render() {
        return (
            <Calendars slots={this.props.calendars} onEventClick={this.onEventClick}
                       onEventDropped={this.props.resetEventView}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {calendars: state.calendarsView.calendars}
};

const mapDispatchToProps = {resetEventView};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarsViewContainer)