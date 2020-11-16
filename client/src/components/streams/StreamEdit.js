import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        const {title, description} = this.props.stream;
        return(
            <div>
                <h3>Edit stream {this.props.match.params.id}</h3>
                <StreamForm initialValues={{title, description: description}} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

/* with ownprops we can access to the url params inside mapstatoProps */
const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStreams, editStream})(StreamEdit);