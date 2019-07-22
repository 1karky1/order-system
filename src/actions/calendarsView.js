import React from "react";
import moment from "moment";


/*
 * action types
 */
export const SELECTED_EVENT_CHANGES   = 'SELECTED_EVENT_CHANGES';
export const CLEAR_SELECTED_EVENT   = 'CLEAR_SELECTED_EVENT';

/*
 * other constants
 */
const calendar1 = {
    name: 'Calendar 1',
    calendarRef: React.createRef(),
    calendarConfig: {
    },
    events: [{
        id: 'a',
        title: 'my event a',
        start: `${moment().format('YYYY-MM-DD')}T11:00:00.000Z`,
        end: `${moment().format('YYYY-MM-DD')}T12:00:00.000Z`,
    }, {
        id: 'b',
        title: 'my event b',
        start: `${moment().format('YYYY-MM-DD')}T12:00:00.000Z`,
        end: `${moment().format('YYYY-MM-DD')}T13:00:00.000Z`,
    }]
};
const calendar2 = {
    name: 'Calendar 2',
    calendarRef: React.createRef(),
    calendarConfig: {
    },
    events: [{
        id: 'c',
        title: 'my event c',
        start: `${moment().format('YYYY-MM-DD')}T11:00:00.000Z`,
        end: `${moment().format('YYYY-MM-DD')}T12:00:00.000Z`,
    }, {
        id: 'd',
        title: 'my event d',
        start: `${moment().format('YYYY-MM-DD')}T12:00:00.000Z`,
        end: `${moment().format('YYYY-MM-DD')}T13:00:00.000Z`,
    }]
};
export const defaultCalendars = [calendar1, calendar2];

/*
 * action creators
 */

export const clearSelectedEvent = () => {
    return {
        type: CLEAR_SELECTED_EVENT
    }
};

export const selectedEventChanges = (oldSelectedEvent, newSelectedEvent) => {
    const selectedEvent = oldSelectedEvent && oldSelectedEvent.id === newSelectedEvent.id ? null : newSelectedEvent;
    return {
        type: SELECTED_EVENT_CHANGES,
        selectedEvent: selectedEvent
    }
};
