import { WebClient, WebAPICallResult } from "@slack/web-api";
import { Channel, isIdQuery, Member, Query } from "../types";

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

interface ChannelsResult extends WebAPICallResult {
  channels: Channel[];
}

interface MembersResult extends WebAPICallResult {
  members: Member[];
}

export async function getChannel(query: Query) {
  const res = (await web.channels.list()) as ChannelsResult;
  return res.channels.find(c => {
    if (isIdQuery(query)) {
      return c.id === query.id;
    } else {
      return c.name === query.name;
    }
  });
}

export async function getUser(query: Query) {
  const res = (await web.users.list()) as MembersResult;
  return res.members.find(m => {
    if (isIdQuery(query)) {
      return m.id === query.id;
    } else {
      return m.name === query.name;
    }
  });
}

export async function sendMessage(channel: string, text: string) {
  return web.chat.postMessage({
    channel,
    text,
    parse: "full"
  });
}
