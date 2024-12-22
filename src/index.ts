import { Client, Events } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

// When bot is first started up.
client.once(Events.ClientReady, (readyClient: Client<true>) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	// deployCommands({ guildId: config.DEV_GUILD_ID });
});

// When bot connects to a server.
client.on(Events.GuildCreate, async (guild) => {
  await deployCommands({ guildId: guild.id });
});

// When command is input by a user.
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(config.DISCORD_TOKEN);

