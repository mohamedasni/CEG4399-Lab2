// Twilio Credentials
var accountSid = 'ACbbf620b496c21f4c5c2caf526c0bea2e';
var authToken = '4e0164b45f7606b2ac52d8c697b9f32f';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

class MessageSenderHelper {
  static sendSMS(message) {
    client.messages.create({
      to: "+16138901093",
      from: "+18738000830",
      body: message,
    }, function(err, message) {
      if (err) {
        console.log(err);
      } else {
        console.log(message.sid);
      }
    });
  }
}

module.exports = MessageSenderHelper;
