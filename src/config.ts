import dotenv from "dotenv";

export type Environment = "prod" | "dev";

dotenv.config();

export default {
  port: process.env.PORT as string,
  accountSid: process.env.ACCOUNT_SID as string,
  authToken: process.env.AUTH_TOKEN as string,
  phoneNumber: process.env.PHONE_NUMBER as string,
  nomicsApiKey: process.env.NOMICS_API_KEY as string,
  databaseUrl: process.env.DATABASE_URL as string,
  env: process.env.NODE_ENV as Environment
};
