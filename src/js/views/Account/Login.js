import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/FirebaseAuth";
import { Redirect } from "react-router";
import { ProductConsumer } from "../../store/context";

import "./login.css";

firebase.initializeApp({
	apiKey: "AIzaSyDYjRvEqgMaXVVyUguFXsrpbp4Pet4G_uE",
	authDomain: "e-commerce-c4b91.firebaseapp.com"
});

class Login extends Component {
	state = { isSignedIn: false };
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInsusses: () => false
		}
	};

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({ isSignedIn: !!user });
		});
	};
	render() {
		return (
			<div className="login-form">
				{this.state.isSignedIn ? (
					<span>
						<Redirect to="/" />
						<button onClick={() => firebase.auth().signOut()}>
							Sign Out!
						</button>
					</span>
				) : (
					<StyledFirebaseAuth
						uiConfig={this.uiConfig}
						firebaseAuth={firebase.auth()}
					/>
				)}
			</div>
		);
	}
}

export default Login;
