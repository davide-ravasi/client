import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if(stream.userId && stream.userId === this.props.currentUserId) {
            return(
                <div className="right floated content">
                    <div className="ui button primary">Edit</div>
                    <div className="ui button red">Delete</div>
                </div>
            )
        }
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return(
                <div style={{textAlign: "right"}}>
                    <Link className="ui button primary" to="/streams/new">Create Stream</Link>
                </div>
            )
        }
    }

    renderList() {
        return (
            this.props.streams.map(stream => {
                return (
                    <div className="ui item" key={stream.id}>
                        {this.renderAdmin(stream)}
                        <i className="large camera middle aligned icon"></i>
                        <div class="content">
                            {stream.title}
                            <div className="description">{stream.description}</div>
                        </div>
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

/* we reconvert object to array cause it's easier to manipulate inside render method */
const mapDispatchToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapDispatchToProps, { fetchStreams })(StreamList);