// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// Twilio Credentials
const accountSid = functions.config().twilio.account_sid;
const authToken = functions.config().twilio.auth_token;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

let twilio = {};

twilio.sendMessage = (to, from, message) => {
  client.messages.create({
    to: to,
    from: from,
    body: message,
  }).then(message => console.log(message.sid)).catch(err => {
    console.log(err);
  });
}

twilio.receiveMessage= (request, response) =>{
  const twiml = new MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  response.writeHead(200, {'Content-Type': 'text/xml'});
  response.end(twiml.toString());
}


module.exports = twilio;