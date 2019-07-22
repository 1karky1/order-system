import calendarsView from './calendarsView'
import eventView from './eventView'

const initialState = {};
const rootReducer = (state = initialState, action) => {
    const selectedEvent = state.calendarsView ? state.calendarsView.selectedEvent : null;
    return {
        calendarsView: calendarsView(state.calendarsView, action),
        eventView: eventView(state.eventView, {...action, selectedEvent})
    };
};

export default rootReducer;