import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const prefix = "?";

client.once("ready", () => {
    console.log("the Enforcer is here!");
});

client.on('error', async interaction => {
    console.log("oh no :(");
});

client.on("interactionCreate", async interaction => {
    console.log("hi");

    if (!interaction.isCommand()) {
        return;
    }

    const { commandName } = interaction;

    if (commandName === "ping") {
        await interaction.reply("fuck off");
    }
});

client.login(process.env.token);