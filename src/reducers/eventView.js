import {formFieldsConfig, INPUT_CHANGES, RESET_EVENT_VIEW} from '../actions/eventView'


const initialState = {
    formValues: formFieldsConfig.reduce((total, field) => ({[field.name]: '', ...total}), {})
};

const eventView = (state=initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGES:
            const newFormValues = {...state.formValues, [action.name]: action.value};
            return {...state, formValues: newFormValues};
        case RESET_EVENT_VIEW:
            return {
                ...initialState,
                formValues: formFieldsConfig.reduce((total, field) => {
                    return {[field.name]: field.eventFormValue(action.selectedEvent), ...total}
                }, {})
            };
        default:
            return state
    }
};

export default eventView;