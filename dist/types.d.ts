export declare type EventType = "app_mention" | "error";
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
    (event: EventType extends "app_mention" ? AppMentionEvent : EventType extends "error" ? Error : Event): void;
}
declare type SlackEntity = {
    id: string;
    name: string;
};
export declare type Channel = SlackEntity;
export declare type Member = SlackEntity;
export declare type IdQuery = {
    id: string;
};
export declare type NameQuery = {
    name: string;
};
export declare type Query = IdQuery | NameQuery;
export declare function isIdQuery(q: IdQuery | NameQuery): q is IdQuery;
export declare class UnreachableError extends Error {
    constructor(val: never, message: string);
}
export interface SlackApiInterface {
    addEvent<T extends EventType>(eventType: T, handler: EventHandler<T>): void;
    getUser(q: Query): any;
}
export {};
