// Twilio Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

function sendMessage(to, from, message) {
  client.messages
    .create({
      to: to,
      from: from,
      body: message,
    })
    .then(message => console.log(message.sid));
}



module.exports = sendMessage;