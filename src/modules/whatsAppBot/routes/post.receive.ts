import EndpointBuilder from "../../httpServer/utils/EndpointBuilder";
import { HttpMethod } from "../../../types/HttpMethod";
import { whatsAppBot } from "..";
import { IMessageInfo } from "../interface";

export default EndpointBuilder.new("/sms")
  .setHttpMethod(HttpMethod.POST)
  .setHandler(async (req, res) => {
    const { body } = req;
    const messageResponse = await whatsAppBot.replyMessage(
      body as IMessageInfo
    );

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(messageResponse);
  });
