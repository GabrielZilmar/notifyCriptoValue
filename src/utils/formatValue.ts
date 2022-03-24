import { ICryptoInfo } from "../modules/cryptoInfo/interface";
import { IMessageInfo } from "../modules/whatsAppBot/interface";

export const formatDefaultMessage = (
  message: string,
  body: IMessageInfo
): string => message.replace("{{name}}", `${body.ProfileName} ${body.WaId}`);

export const formatCryptoInfoMessage = (
  message: string,
  body: ICryptoInfo
): string =>
  message
    .replace("{{coinName}}", body?.name)
    .replace("{{coinPrice}}", parseFloat(body?.price).toFixed(2));
