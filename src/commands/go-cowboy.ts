import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("gocowboy")
  .setDescription("Opens Team Cowboy in browser");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Opening Team Cowboy in your browser.");
}
