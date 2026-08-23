# OneGlass Mate Slack Bot

A small Slack bot built with [Slack Bolt for JavaScript](https://slack.dev/bolt-js/) and Socket Mode. OneGlass Mate responds to slash commands for health checks, fun facts, jokes, roasts, and built-in help.

## Features

- Check the bot's response latency
- Fetch a random cat fact from Cat Facts API
- Fetch a random joke from Official Joke API
- Post a random roast publicly in the channel
- Display the available commands from Slack

## Requirements

- Node.js 18 or newer
- A Slack workspace where you can create and install apps
- A Slack app with Socket Mode enabled

## Setup

1. Install the dependencies:

	```bash
	npm install
	```

2. Create a Slack app at [api.slack.com/apps](https://api.slack.com/apps).

3. Enable **Socket Mode** and create an app-level token with the `connections:write` scope. Copy the token that starts with `xapp-`.

4. Add the `commands` bot token scope under **OAuth & Permissions**, then install the app in your workspace. Copy the bot token that starts with `xoxb-`.

5. Create a `.env` file in the project root:

	```env
	SLACK_BOT_TOKEN=xoxb-your-bot-token
	SLACK_APP_TOKEN=xapp-your-app-level-token
	```

6. Add the slash commands listed below in **Features > Slash Commands**. Socket Mode does not require a Request URL.

## Run the bot

Start the bot with:

```bash
node index.js
```

When it starts successfully, the terminal prints:

```text
bot is running!
```

Keep the process running for the bot to remain available. The external cat fact and joke commands also require internet access.

## Commands

| Command | Description |
| --- | --- |
| `/oneglass-mate-ping` | Check the bot's latency. |
| `/oneglass-mate-catfact` | Get a random cat fact. |
| `/oneglass-mate-joke` | Get a random joke. |
| `/oneglass-mate-roast` | Post a random roast in the channel. |
| `/oneglass-mate-help` | Show the available commands. |

## Project structure

```text
.
├── index.js       # Slack app and command handlers
├── package.json   # Project metadata and dependencies
└── .env           # Local Slack tokens (do not commit this file)
```

## Security

Never commit `.env` or share Slack tokens. If a token is exposed, revoke it in the Slack app settings and generate a replacement.

## License

This project is currently marked as ISC in `package.json`.
