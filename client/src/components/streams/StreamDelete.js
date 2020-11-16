import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
import history from '../../history';

class StreamDelete extends React.Component {
    actions = (
        <React.Fragment>
            <button class="ui button negative" onClick={() => this.props.deleteStream(this.props.match.params.id)}>Delete</button>
            <Link to="/" class="ui button">Cancel</Link>
        </React.Fragment>
    )

    renderContent() {
        if(!this.props.stream) return 'Are you sure you want to delete this stream?';

        return `Are you sure you want to delete the stream with id ${this.props.stream.id} with title "${this.props.stream.title}"?`
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    render() {
        return (
            <Modal
                title={'Delete stream'}
                content={this.renderContent()}
                actions={this.actions}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapDispatchToProps = (state, OwnProps) => {
    return {
        stream: state.streams[OwnProps.match.params.id]
    }
}

export default connect(mapDispatchToProps, {fetchStream, deleteStream})(StreamDelete);