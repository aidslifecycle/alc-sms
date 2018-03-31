// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Require custom functions
const twilio = require('./twilio');

// Cloud Function Docs
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.twilioSendMessage = functions.https.onRequest((request, response) => {
	twilio.sendMessage('+19253308689','+18504040989','Hello');
	response.send("Hello from Firebase!");
});

exports.twilioReceiveMessage = functions.https.onRequest((request, response) => {
	twilio.receiveMessage(request, response);
});

