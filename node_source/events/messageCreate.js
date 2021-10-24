const { Client } = require("discord.js");

module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message) {
        if (message.channel.name != "bot-testing") return;
        console.log(`${message.author.username} in #${message.channel.name} triggered an message "${message.content}".`);
        if (message.content == 'Sup, dude!') return;
        await message.reply('Sup, dude!');
        // if (!interaction.isCommand()) return;

        // const command = client.commands.get(interaction.commandName);
        // if (!command) return;

        // try {
        //     await command.execute(interaction);
        // } catch (error) {
        //     console.error(error);
        //     await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        // }
},
};