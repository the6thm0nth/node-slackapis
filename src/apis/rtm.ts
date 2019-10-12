import { RTMClient } from "@slack/rtm-api";
import { EventHandler } from "../types";

const token = <string>process.env.SLACK_TOKEN;
const rtm = new RTMClient(token);

export async function start() {
  return rtm.start().catch(console.error);
}

export async function addEventHandlers(type: string, handler: EventHandler) {
  rtm.on(type, handler);
  rtm.on("message.im", e => {
    console.log(e);
  });
}
