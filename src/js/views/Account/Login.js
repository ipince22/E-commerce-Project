import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/FirebaseAuth";
import { Redirect, useHistory } from "react-router";
import { ProductConsumer } from "../../store/context";

import "./login.css";

firebase.initializeApp({
	apiKey: "AIzaSyDYjRvEqgMaXVVyUguFXsrpbp4Pet4G_uE",
	authDomain: "authDomain=e-commerce-c4b91.firebaseapp.com"
});

class Login extends React.Component {
	// state = { isSignedIn: false };

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
			<ProductConsumer>
				{value => {
					const { isSignedIn } = value;

					return (
						<div className="login-form">
							{isSignedIn ? (
								<span>
									<h1>Hola</h1>
									<button
										onClick={() =>
											firebase.auth().signOut()
										}>
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
				}}
			</ProductConsumer>
		);
	}
}

export default Login;
