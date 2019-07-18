import React from 'react';
import Event from './event/Event'
import {connect} from "react-redux";
import {formFieldsConfig, inputChanges} from "../actions/eventView";


class EventViewContainer extends React.Component {

    getFormFields = () => {
        return formFieldsConfig || [];
    };

    isValid = () => {
        return this.getFormFields().every(field => field.isValid(this.props.formValues[field.name]));
    };

    getEventData = () => {
        const formData = this.getFormFields().reduce((total, field) => {
            return {
                [field.eventDataName]: field.eventDataValue(this.props.formValues[field.name]),
                ...total
            }
        }, {});
        return {
            id: Date.now(),
            ...formData,
        }
    };

    render() {
        return (
            <Event formFieldsConfig={this.getFormFields()} formValues={this.props.formValues}
                   isValid={this.isValid()} eventData={this.getEventData()} inputChanges={this.props.inputChanges}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {formValues: state.eventView.formValues}
};

const mapDispatchToProps = {inputChanges};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventViewContainer);
