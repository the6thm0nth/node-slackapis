import { WebAPICallResult } from "@slack/web-api";
import { Query } from "../types";
export declare function getChannel(query: Query): Promise<{
    id: string;
    name: string;
} | undefined>;
export declare function getUser(query: Query): Promise<{
    id: string;
    name: string;
} | undefined>;
export declare function sendMessage(channel: string, text: string): Promise<WebAPICallResult>;
