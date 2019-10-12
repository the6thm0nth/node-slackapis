import { createEventAdapter } from "@slack/events-api";

import { EventHandler } from "../types";

const slackEvents = createEventAdapter(<string>(
  process.env.SLACK_SIGNING_SECRET
));

export async function start(port: number, handler: EventHandler) {
  return slackEvents.start(port).then(handler);
}

export async function addEvent(type: string, handler: EventHandler) {
  slackEvents.on(type, handler);
}
