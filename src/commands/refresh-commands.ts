import { REST, CommandInteraction, SlashCommandBuilder, Routes } from "discord.js";
import { config } from "../config";
import { commands } from ".";

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

export const data = new SlashCommandBuilder()
  .setName("crefresh")
  .setDescription("Refresh command list");

export async function execute(interaction: CommandInteraction) {
	try {
		console.log('Refreshing application (/) commands.');

		const commandsData = Object.values(commands).map((command) => command.data);

		await rest.put(
			Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, '373951410355699712'),
			{
				body: commandsData,
			}
		);

		console.log('Successfully reloaded application (/) commands.');
		return interaction.reply("Refreshed command list.");
	} catch (error) {
		console.error(error);
		return interaction.reply("Failed to refresh command list.");
	}
}
