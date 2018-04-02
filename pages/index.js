import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import 'isomorphic-unfetch';
import Layout from '../components/Layout';
import GroupsSidebar from '../components/GroupsSidebar';
import ChannelFeed from '../components/ChannelFeed';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

class Index extends React.Component {

  static async getInitialProps() {
    return {
      config
    }
  }

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.props.config);
    }
  }

  componentDidMount() {
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

  handleLogout() {
    firebase.auth().signOut();
  }

  render() {
    return (<Layout>
              <div className="container">
                <div className="row">
                  <ChannelFeed />
                </div>
              </div>
            </Layout>);
  }
}

export default Index;