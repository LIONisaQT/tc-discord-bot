/**
 * This command is required because new commands will not get recognized by the bot.
 * Existing command behavior can be updated without running this command.
 */

import { CommandInteraction, SlashCommandBuilder, Routes } from "discord.js";
import { deployCommands } from "../deploy-commands";
import { config } from "../config";

export const data = new SlashCommandBuilder()
  .setName("crefresh")
  .setDescription("Refresh command list");

export async function execute(interaction: CommandInteraction) {
	const success = await deployCommands({ guildId: config.DEV_GUILD_ID });
	return interaction.reply(success ? "Refreshed command list." : "Failed to refresh command list.");

}
