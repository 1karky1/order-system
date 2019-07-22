import {defaultCalendars} from '../actions/calendarsView'
import {SELECTED_EVENT_CHANGES, CLEAR_SELECTED_EVENT} from "../actions/calendarsView";

const initialState = {
    selectedEvent: null,
    calendars: defaultCalendars
};

const calendarsView = (state=initialState, action) => {
    switch (action.type) {
        case CLEAR_SELECTED_EVENT:
            return {...state, selectedEvent: null};
        case SELECTED_EVENT_CHANGES:
            return {...state, selectedEvent: action.selectedEvent};
        default:
            return state
    }
};

export default calendarsView;