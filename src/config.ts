import dotenv from "dotenv";

dotenv.config();

export default {
  accountSid: process.env.ACCOUNT_SID as string,
  authToken: process.env.AUTH_TOKEN as string,
  phoneNumber: process.env.PHONE_NUMBER as string,
  nomicsApiKey: process.env.NOMICS_API_KEY as string
};
