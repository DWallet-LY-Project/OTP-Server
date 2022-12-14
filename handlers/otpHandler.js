const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


function otpHandler(phone, message) {
    return client.messages
        .create({
            body: message,
            from: process.env.TWILLIO_NUMBER,
            to: phone
        })
        .then(message => console.log(message.sid));
}




module.exports = otpHandler;