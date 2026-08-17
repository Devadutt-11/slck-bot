const axios = require("axios");
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/oneglass-mate-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
app.command("/oneglass-mate-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/oneglass-mate-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/oneglass-mate-roast", async ({ ack, respond, command 
}) => {
  await ack();

  const rosts = [
    "is the kind of person who pushes on a door that clearly says 'PULL'.",
    "takes 20 minutes to decide what to watch on Netflix and then falls asleep.",
    "probably explains the plot of a movie while watching it for the first time.",
    "forgets why they walked into a room 95% of the time.",
    "definitely leaves their shopping cart in the middle of the parking lot aisle."
  ];

  const randomRoast = rosts[Math.floor(Math.random() * rosts.length)];

  try{
    await respond({
      respond_type: "in_channel",
      text: `🔥 Roast: ${randomRoast}`
    });
  }catch(err){
    await respond({ text: "Failed to fetch a roast." });
  }
});
 app.command("/oneglass-mate-help",async({ack,respond})=>{
  await ack();
  await respond({
    text: "Available commands:\n" +
          "/oneglass-mate-ping - Check bot latency\n" +
          "/oneglass-mate-catfact - Get a random cat fact\n" +
          "/oneglass-mate-joke - Get a random joke\n" +
          "/oneglass-mate-help - Show this help message\n" +
          "/oneglass-mate-roast - Get a random roast" 
  });
});


