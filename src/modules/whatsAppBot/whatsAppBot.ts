import { Twilio, twiml } from "twilio";
import { whatsAppBotController } from ".";
import config from "../../config";
import { IMessageInfo } from "./interface";

class WhatsAppBot {
  private authToken: string;
  private accountSid: string;
  private phoneNumber: string;
  private client: Twilio;

  constructor() {
    this.authToken = config.authToken;
    this.accountSid = config.accountSid;
    this.phoneNumber = config.phoneNumber;

    this.client = new Twilio(this.accountSid, this.authToken);
  }

  async sendFreeMessage(message: string, to: string) {
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

  async replyMessage(messageInfo: IMessageInfo): Promise<string> {
    const messageResponse = new twiml.MessagingResponse();
    const message = await whatsAppBotController.processMessage(messageInfo);

    messageResponse.message(message);

    return messageResponse.toString();
  }
}

export default WhatsAppBot;
