import Head from 'next/head';
import React, { Component } from 'react'
import Layout from '../components/Layout';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import 'isomorphic-unfetch';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

var uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function(authResult, redirectUrl) {
			// User successfully signed in.
			// Return type determines whether we continue the redirect automatically
			// or whether we leave that to developer to handle.
			return true;
		},
		uiShown: function() {
			// The widget is rendered.
			// Hide the loader.
			document.getElementById('loader').style.display = 'none';
		}
	},
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow: 'popup',
	signInSuccessUrl: '/',
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.PhoneAuthProvider.PROVIDER_ID
	],
	// Terms of service url.
	tosUrl: 'https://www.aidslifecycle.org/privacy-policy/'
};


class Login extends React.Component {

	static async getInitialProps() {
		return {
			config,
			uiConfig
		}
	}

	componentWillMount() {
		if (!firebase.apps.length) {
			firebase.initializeApp(this.props.config);
		}
	}

	componentDidMount(){
		firebase.auth().signOut();
		firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user
        });

        console.log("Logged in");
      } else {
        this.setState({
          user: null
        });
        console.log("Logged out");
      }
    })
	}

	render() {
		return (<Layout>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Login</h2>
                  <StyledFirebaseAuth uiConfig={ this.props.uiConfig } firebaseAuth={ firebase.auth() } />
                </div>
              </div>
            </div>
          </Layout>);
	}
}


export default Login;