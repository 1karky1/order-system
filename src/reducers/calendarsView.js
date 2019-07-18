import {defaultCalendars} from '../actions/calendarsView'

const initialState = {
    selectedEvent: null,
    calendars: defaultCalendars
};

function calendarsView(state= initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default calendarsView;