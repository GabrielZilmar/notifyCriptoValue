import twilio, { Twilio } from "twilio";
import config from "../../config";

class WhatsAppBot {
  private authToken: string;
  private accountSid: string;
  private phoneNumber: string;
  private client: Twilio;

  constructor() {
    this.authToken = config.authToken;
    this.accountSid = config.accountSid;
    this.phoneNumber = config.phoneNumber;

    this.client = twilio(this.accountSid, this.authToken);
  }

  start() {
    this.sendMessage("Hello World", "+553899731516");
  }

  async sendMessage(message: string, to: string) {
    try {
      this.client.messages
        .create({
          body: message,
          from: `whatsapp:${this.phoneNumber}`,
          to: `whatsapp:${to}`
        })
        .then((message) => console.log(message.sid))
        .finally();
    } catch (e) {
      console.log(e);
    }
  }
}

export default WhatsAppBot;
