import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

class Login extends React.Component {
	static async getInitialProps() {
		return {
			configuration: config,
			title: 'Login'
		}
	}

	componentDidMount() {
		// Initialize Firebase
		firebase.initializeApp(this.props.configuration);

		var ui = new firebaseui.auth.AuthUI(firebase.auth());

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

		ui.start('#firebaseui-auth-container', uiConfig);
	}

	render() {
		return (<Layout>
            <Head>
              <title>Login</title>
              <script src="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.js"></script>
              <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />
            </Head>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
									<h2>{ this.props.title }</h2>
                  <div id="firebaseui-auth-container"></div>
                </div>
              </div>
            </div>
          </Layout>);

	}
}


export default Login;