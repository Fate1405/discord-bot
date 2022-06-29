const { Client, Intents } = require('discord.js');
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('voiceStateUpdate', (oldState, newState) => {
    let oldSize;
    let newSize;
    if (oldState.channel === null) {
        oldSize = 0;
    } else {
        oldSize = oldState.channel.members.size;
    }
    if (newState.channel === null) {
        newSize = 0;
    } else {
        newSize = newState.channel.members.size;
    }
    if (newSize > oldSize) {
        console.log(`New Size: ${newState.channel.members.size}\nOld Size: ${oldSize}`);
        client.channels.cache.get('960866688688091212').send('@everyone someone joined a VC');
    }
});

client.login(process.env.token);