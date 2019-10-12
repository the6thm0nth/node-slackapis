/// <reference types="node" />
import { EventHandler, EventType } from "../types";
export declare function start(port: number, handler: any): Promise<import("http").Server>;
export declare function addEvent<T extends EventType>(eventType: T, handler: EventHandler<T>): Promise<void>;
