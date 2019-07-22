import React from 'react';
import './eventform.scss';


// Inputs: { fields, }
//    event(required): input fields for the
const EventForm = (props) => {
    const fields = props.fields || [];
    return (
        <form>
            <div>
                {fields.map((field, index) => (
                    <label className="event-label" key={index}>
                        {field.label}
                        <input className="event-input" type={field.type} name={field.name} step={field.step}
                               value={props[field.name]} onChange={props.inputChange}/>
                    </label>
                ))}
            </div>
        </form>
    )
};

export default EventForm;