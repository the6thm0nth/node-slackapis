import apis from "./apis";
import { EventHandler, Query } from "./types";

class SlackApi {
  private events: string[];

  constructor() {
    this.events = [];
  }

  public getEvents() {
    return this.events;
  }

  public addEvent(eventName: string, handler: EventHandler) {
    this.events.push(eventName);
    apis.events.addEvent(eventName, handler);
  }

  public getChannel(q: Query) {
    return apis.web.getChannel(q);
  }

  public sendMessage(channel: string, text: string) {
    return apis.web.sendMessage(channel, text);
  }
}

export default new SlackApi();
