const accountSid = "AC43137d00f776333458e2c777876a5b30";
const authToken = "[Redacted]";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello! This is an editable text message. You are free to change it and write whatever you like.",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+553899731516"
  })
  .then((message) => console.log(message.sid))
  .done();
