import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const prefix = "?";

client.once("ready", () => {
    console.log("the Enforcer is here!");
});

client.on("messageCreate", async message => {
    console.log(message.content);
    // if (!interaction.isCommand()) {
    //     return;
    // }

    // const { commandName } = interaction;

    // if (commandName === "ping") {
    //     await interaction.reply("fuck off");
    // }
});

client.login(process.env.token);