import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import './calendar.scss';
import { defaultChangeableCalendarConfig, defaultFixedCalendarConfig } from "./constants";



// Inputs: { calendarRef, events, calendarConfig, onEventDropped, onEventClick }
//    calendarRef: API to work with calendar
//    events: link to json endpoint, array or function
//    calendarConfig: calendar config override options
//    onEventDropped: remove external event
//    onEventClick: event click
const Calendar = ({calendarRef, events, calendarConfig, onEventClick, onEventDropped}) => {
    const otherConf = {
        ref: calendarRef,
        plugins: [timeGridPlugin, interactionPlugin, bootstrapPlugin],
        eventClick: onEventClick,
        eventReceive: onEventDropped,
        events: events,
    };
    const finalCalendarConfig = { ...defaultChangeableCalendarConfig, ...calendarConfig,
        ...otherConf,...defaultFixedCalendarConfig };

    return (
        <FullCalendar {...finalCalendarConfig}/>
    );
};

export default Calendar;