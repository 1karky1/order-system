import React from 'react';

// Inputs: { fields, }
//    event(required): input fileds for the
class EventForm extends React.Component {

    render () {
        const fields = this.props.fields || [];
        return (
            <form>
                <div>
                    {fields.map((field, index) => (
                        <label className="event-label" key={index}>
                            {field.label}
                            <input className="event-input" type={field.type} name={field.name} value={this.props[field.name]} onChange={this.props.inputChange} />
                        </label>
                    ))}
                </div>
            </form>
        )
    }
}

export default EventForm;