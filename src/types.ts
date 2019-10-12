// TODO;
type Event = any;

export type EventHandler = (event: Event) => void;

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
