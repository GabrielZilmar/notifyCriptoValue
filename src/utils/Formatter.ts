import { ICryptoInfo } from "../modules/cryptoInfo/interface";
import { IMessageInfo } from "../modules/whatsAppBot/interface";

class Formatter {
  static formatDefaultMessage = (message: string, body: IMessageInfo): string =>
    message.replace("{{name}}", `${body.ProfileName} ${body.WaId}`);

  static formatCryptoInfoMessage = (
    message: string,
    body: ICryptoInfo
  ): string =>
    message
      .replace("{{coinName}}", body?.name)
      .replace("{{coinPrice}}", parseFloat(body?.price).toFixed(2));
}

export default Formatter;
