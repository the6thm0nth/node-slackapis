# Slack Node Client Wrapper

## Prerequisite
1. Generate a token for your slack workspace. ([Official Guide](https://slack.com/intl/en-kr/help/articles/215770388-create-and-regenerate-api-tokens))
2. Grap your `Signing Secret`. ([Official Guide](https://api.slack.com/docs/verifying-requests-from-slack#signing_secrets_admin_page))

```bash
# .env
SLACK_SIGNING_SECRET=
SLACK_TOKEN=
```

## API

### events

1. `events.start`: this event should be called before calling other `events` APIs.

```typescript
import slack from "node-slackapis";

const PORT = 3000;
slack.events.start(PORT, () => {
  console.log(`Listen on ${PORT}`);
});
```

2. `events.addEvent`

```typescript
import slack from "node-slackapis";

const PORT = 3000;
slack.events.addEvent("app_mention", event => {
  const { channel, text } = event;
  console.log("app_mention event is triggered");
  console.log(`TEXT: ${text}`);
  console.log(`Channel ID: ${channel}`);
});
```

### rtm

1. `rtm.start`

```typescript
import slack from "node-slackapis";

slack.rtm.start();
```

### web

1. `web.getChannel`

```typescript
import slack from "node-slackapis";

// by Id
slack.web.getChannel({ id: 'a1b2c3' })
  .then(channel => {
    // channel = { id: 'a1b2c3', name: 'general' };
  })

// by Name
slack.web.getChannel({ name: 'general' })
  .then(channel => {
    // channel = { id: 'a1b2c3', name: 'general' };
  })
```


2. `web.getUser`

```typescript
import slack from "node-slackapis";

// by Id
slack.web.getUser({ id: 'a1b2c3' })
  .then(user => {
    // user = { id: 'a1b2c3', name: 'the6thm0nth' };
  })

// by Name
slack.web.getUser({ name: 'the6thm0nth' })
  .then(user => {
    // user = { id: 'a1b2c3', name: 'the6thm0nth' };
  })
```

3. `web.sendMessage`

```typescript
import slack from "node-slackapis";

const channel = await slack.web.getChannel({ name: 'general' });
slack.web.sendMessage(channel.id, "Hello World!");
```

## License
MIT