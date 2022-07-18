const {SlashCommandBuilder} = require("@discordjs/builders");
const {Rest} = require("@discordjs/rest");
const {Routes} = require("discord-api-types/v9");
const {clientId, guildId, token} = require("./config")

const commands = [
    new SlashCommandBuilder().setName("ping")
].map(command => command.toJSON());

const rest = new Rest({
    version: "9"
}).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), {
    body: commands
}).then(() => console.log("Good news")).catch(console.error);