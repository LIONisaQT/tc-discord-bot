import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("rsvp")
  .setDescription("RSVP for practice");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Attendance for next practice confirmed.");
}
