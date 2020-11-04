import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    auth;

    componentDidMount() {

        // Load the API's client and auth2 modules.
        // LOad the library
        window.gapi.load('client:auth2', () => {

            // Initialize the gapi.client object, which app uses to make API requests.
            // Get API key and client ID from API Console.
            // 'scope' field specifies space-delimited list of access scopes.
            window.gapi.client.init({
                clientId: '',
                scope: 'email'
            }).then(() => {

                // get instance of auth and access to methods for signing in or out
                this.auth = window.gapi.auth2.getAuthInstance();

                // Listen for sign-in state changes.
                this.updateSigninStatus(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.updateSigninStatus);
            });
        });
    }

    updateSigninStatus = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return <div>Loading..</div>
        } else if (this.props.isSignedIn === true) {
            return (
                <button className="ui red button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Sign In
                </button>
            )
        }

    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,
    {signIn, signOut}
    )(GoogleAuth);