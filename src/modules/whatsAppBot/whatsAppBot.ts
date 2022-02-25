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

  async sendMessage(message: string, to: string) {
    try {
      this.client.messages
        .create({
          body: message,
          from: `whatsapp:${this.phoneNumber}`,
          to: `whatsapp:${to}`
        })
        .then((message) =>
          console.info(`Message sent to ${to}. Confirmation: ${message.sid}`)
        )
        .finally();
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default WhatsAppBot;
