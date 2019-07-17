import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import './calendar.scss';
import { defaultChangeableCalendarConfig, defaultFixedCalendarConfig } from "./constants";



// Inputs: { calendarRef, events, calendarConfig, onExternalEventDropped}
//    calendarRef: API to work with calendar
//    events: link to json endpoint, array or function
//    calendarConfig: calendar config override options
//    onExternalEventDropped: remove external event
class Calendar extends React.Component {

    getCalendarOptions = () => {
        const otherConf = {
            ref: this.props.calendarRef,
            plugins: [timeGridPlugin, interactionPlugin, bootstrapPlugin],
            eventClick: this.props.onEventClick,
            eventRender: this.eventRender,
            eventReceive: this.props.onEventDropped,
            events: this.props.events,
        };
        return { ...defaultChangeableCalendarConfig, ...this.props.calendarConfig, ...otherConf,
                 ...defaultFixedCalendarConfig };
    };

    render() {
        return (
            <FullCalendar {...this.getCalendarOptions()}/>
        );
    }
}

export default Calendar;