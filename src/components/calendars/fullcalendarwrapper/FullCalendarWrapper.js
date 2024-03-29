import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import './fullcalendarwrapper.scss';
import { defaultChangeableCalendarConfig, defaultFixedCalendarConfig } from "./constants";



// Inputs: { calendarRef, events, calendarConfig, onEventDropped, onEventClick }
//    calendarRef: API to work with calendar
//    events: link to json endpoint, array or function
//    calendarConfig: calendar config override options
//    onEventDropped: remove external event
//    onEventClick: event click
const FullCalendarWrapper = ({calendarRef, events, calendarConfig, onEventClick, onEventDropped, onEventResize}) => {
    const otherConf = {
        ref: calendarRef,
        plugins: [timeGridPlugin, interactionPlugin, bootstrapPlugin],
        eventClick: onEventClick,
        eventReceive: onEventDropped,
        eventResize: onEventResize,
        events: events,
    };
    const finalCalendarConfig = { ...defaultChangeableCalendarConfig, ...calendarConfig,
        ...otherConf,...defaultFixedCalendarConfig };

    return (
        <FullCalendar {...finalCalendarConfig}/>
    );
};

export default FullCalendarWrapper;