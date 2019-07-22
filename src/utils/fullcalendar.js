export const selectUnselectEvent = (calendars, clickedEventId) => {
    forEachEvent(calendars,  event => {
        if (event.id === clickedEventId && event.classNames.length === 0) {
            event.setProp('classNames', 'selected-event');
        } else {
            event.setProp('classNames', null);
        }
    });
};

export const unselectEvent = (calendars) => {
    forEachEvent(calendars,  event => {
            event.setProp('classNames', null);
    });
};

const forEachEvent = (calendars, callback) => {
    forEachCalendar(calendars, calendar => {
        getCalendarAPI(calendar).getEvents().forEach(event => callback(event));
    });
};

const forEachCalendar = (calendars, callback) => {
    calendars.forEach(calendar => callback(calendar));
};

const getCalendarAPI = (calendar) => {
    return calendar.calendarRef.current.getApi();
};