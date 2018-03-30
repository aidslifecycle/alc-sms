const functions = require('firebase-functions');

// Cloud Function Docs
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.twilio = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase!");
});