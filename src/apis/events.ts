import { createEventAdapter } from "@slack/events-api";
import { EventHandler, EventType } from "../types";

const slackEvents = createEventAdapter(<string>(
  process.env.SLACK_SIGNING_SECRET
));

export async function start(port: number, handler: any) {
  return slackEvents.start(port).then(handler);
}

export async function addEvent<T extends EventType>(
  eventType: T,
  handler: EventHandler<T>
) {
  switch (eventType) {
    case "app_mention":
      (slackEvents as any).on(eventType, handler);
      break;
    case "error":
      (slackEvents as any).on(eventType, handler);
      break;
    default:
      console.log(eventType);
  }
}
