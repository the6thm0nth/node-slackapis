export type EventType = "app_mention" | "error";

interface Event {
  type: string;
}

export interface AppMentionEvent extends Event {
  user: string;
  text: string;
  ts: string;
  channel: string;
  event_ts: string;
}

export interface EventHandler<EventType> {
  (
    event: EventType extends "app_mention"
      ? AppMentionEvent
      : EventType extends "error"
      ? Error
      : Event
  ): void;
}

type SlackEntity = {
  id: string;
  name: string;
};
export type Channel = SlackEntity;
export type Member = SlackEntity;

export type IdQuery = {
  id: string;
};

export type NameQuery = {
  name: string;
};

export type Query = IdQuery | NameQuery;

export function isIdQuery(q: IdQuery | NameQuery): q is IdQuery {
  return (q as IdQuery).id !== undefined;
}

export class UnreachableError extends Error {
  constructor(val: never, message: string) {
    super(`TypeScript thought we could never end up here\n${message}`);
  }
}

export interface SlackApiInterface {
  addEvent<T extends EventType>(eventType: T, handler: EventHandler<T>): void;

  getUser(q: Query): any;
}
