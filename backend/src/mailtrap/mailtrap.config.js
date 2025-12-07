import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

//Check if we're using the mailtrap sandbox
const isSandbox = process.env.MAILTRAP_USE_SANDBOX === "true";
const inboxId = isSandbox ? Number(process.env.MAILTRAP_INBOX_ID) : undefined;

console.log("Mailtrap config at startup:", {
  tokenSet: process.env.MAILTRAP_TOKEN,
  isSandbox,
  inboxId,
});

export const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  sandbox: isSandbox, // tells Mailtrap to use Email testing
  testInboxId: inboxId, //required for sandbox Mailtrap inbox
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Cindy",
};