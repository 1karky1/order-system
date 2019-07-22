import {minutesToHourMinutes} from "../utils/time";


/*
 * action types
 */

export const INPUT_CHANGES   = 'INPUT_CHANGES';
export const RESET_EVENT_VIEW   = 'RESET_EVENT_VIEW';

/*
 * other constants
 */

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
    step: '30',
    eventDataName: 'duration',
    isValid: (value) => {
        return value && value >= 30 && value <=1440 && value % 30 === 0;
    },
    eventDataValue: (value) => {
        return minutesToHourMinutes(value);
    }
};
export const formFieldsConfig = [TITLE_FIELD, DURATION_FIELD];

/*
 * action creators
 */


export const inputChanges = (event) => {
    const { name, value } = event.target;
    return {
        type: INPUT_CHANGES,
        name: name,
        value: value,
    }
};

export const resetEventView = () => {
    return {
        type: RESET_EVENT_VIEW,
    }
};
