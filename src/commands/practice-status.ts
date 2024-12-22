import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("pstatus")
  .setDescription("Gives next practice status");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("There is no practice scheduled.");
}
