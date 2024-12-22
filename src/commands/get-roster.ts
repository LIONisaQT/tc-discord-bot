import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("roster")
  .setDescription("Get roster for upcoming practice");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("List of attendees.");
}
