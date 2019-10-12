import { RTMClient } from "@slack/rtm-api";

const token = <string>process.env.SLACK_TOKEN;
const rtm = new RTMClient(token);

export async function start() {
  return rtm.start().catch(console.error);
}
