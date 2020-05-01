import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/FirebaseAuth";
import { Redirect, useHistory } from "react-router";
import { ProductConsumer } from "../../store/context";

import "./login.css";

firebase.initializeApp({
	apiKey: "AIzaSyDYjRvEqgMaXVVyUguFXsrpbp4Pet4G_uE",
	authDomain: "e-commerce-c4b91.firebaseapp.com"
});

class Login extends React.Component {
    // state = { user: false };
    const history = useHistory();

    function goBackHandler() {
        history.goBack();
    }

	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		],
		signInSuccessUrl: "/"
	};

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			user && this.context.setisSignedIn(true);
		});
	};

	render() {
		return (
			<ProductConsumer>
				{value => {
					const { isSignedIn, setisSignedIn } = value;
					// this.state.user && !isSignedIn && setisSignedIn(true);

					return (
						<div className="login-form">
							{isSignedIn ? (
                                this.goBackHandler()
								// <span>
								// 	<h1>Hola</h1>
								// 	<button
								// 		onClick={() => {
								// 			setisSignedIn(false);
								// 			this.setState({ user: false });
								// 			firebase.auth().signOut();
								// 		}}>
								// 		Sign Out!
								// 	</button>
								// </span>
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

Login.contextType = ProductConsumer;
export default Login;
