import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: `351149860220-vl2j3gd2f8ih3706v3qocf27dqqv0q41.apps.googleusercontent.com`,
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				})
				.catch(() => {});
		});
	}

	renderAuthButton = () => {
		if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else if (this.props.isSignedIn === false) {
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
					<i className="google icon" />
					Sign In
				</button>
			);
		} else {
			return null;
		}
	};

	onSignInClick = () => {
		this.auth.signIn(this.auth.currentUser.get().getId());
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
