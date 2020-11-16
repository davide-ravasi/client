import React from 'react';
import {streamCreate} from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    /* custom on submit function */
    /* in the props receives the name and the value of every input of the form */ 
    onSubmit = (formValues) => {
        this.props.streamCreate(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create new Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { streamCreate })(StreamCreate);