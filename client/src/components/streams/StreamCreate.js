import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {streamCreate} from '../../actions';
import { connect } from 'react-redux';

class StreamCreate extends React.Component {

    renderError(meta) {
        if(meta.touched && meta.error) {
            return (
                <div className="ui message error" style={{'display': 'block'}}>
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            )
        }
    }

    // custom input
    // see https://redux-form.com/8.1.0/docs/api/field.md/#usage
    renderInput = ({input, label, meta}) => {
        // inside the props.input we have all the helpers and the
        // attributes of the input

        let className =  `field ${meta.touched && meta.error ? 'error' : ''}`;
        // LABEL: if we pass an attribute like label that redux-form doesn't know
        // it's passed as a prop in the function
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        )
    }

    /* custom on submit function */
    /* in the props receives the name and the value of every input of the form */ 
    onSubmit = (formValues) => {
        this.props.streamCreate(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field 
                    name="title"
                    component={this.renderInput}
                    label="Title"
                />
                <Field 
                    name="description"
                    component={this.renderInput}
                    label="Description"
                />
                <button type="submit" className="ui primary button">Submit</button>
            </form>
        )
    }
}

/* the function receives from redux-form an object with the inputs names and values */
/* if validate returns an empty object the form is valid */
/* if return an object with a key with the name if input and a value as error msg */
/* it adds it on input object return under META section */
const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = 'Title is empty'
    }

    if(!values.description) {
        errors.description = 'Description is empty'
    }

    return errors
}

// reduxForm wire up the form with redux
// it's like connect for the components
const reduxFormConn = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)

export default connect(null, { streamCreate })(reduxFormConn);