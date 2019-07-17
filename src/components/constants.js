import React from "react";
import moment from "moment";

const slot1 = {
    name: 'Slot 1',
    calendarRef: React.createRef(),
    calendarConfig: {},
    events: [{
        id: 'a',
        title: 'my event a',
        start: `${moment().format('YYYY-MM-DD')}T11:00:00.000Z`,
    }, {
        id: 'b',
        title: 'my event b',
        start: `${moment().format('YYYY-MM-DD')}T12:00:00.000Z`,
    }]
};

const slot2 = {
    name: 'Slot 2',
    calendarRef: React.createRef(),
    calendarConfig: {},
    events: [{
        id: 'c',
        title: 'my event c',
        start: `${moment().format('YYYY-MM-DD')}T11:00:00.000Z`,
    }, {
        id: 'd',
        title: 'my event d',
        start: `${moment().format('YYYY-MM-DD')}T12:00:00.000Z`,
    }]
};


export const defaultSlots = [slot1, slot2];