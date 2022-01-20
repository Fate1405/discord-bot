const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", msg => {
    if (msg.content === "Someone joined the channel" && msg.author.id == "172002275412279296") {
        msg.reply("@everyone");
    }
});

client.login("OTMzMjgzNDU4NTAxOTcyMDE4.YefR9A.hFXm63fTjKl30NcrE_7QJXodMI0");