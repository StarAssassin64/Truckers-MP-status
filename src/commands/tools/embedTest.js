const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embedtest')
        .setDescription('Returns embed test'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('This is an embed')
            .setDescription('This is a very cool description')
            .setColor(0xFF0000)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: 'https://github.com/StarAssassin64/',
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL('https://github.com/StarAssassin64/truckers-mp-status')
            .addFields([
                {
                    name: 'Field 1',
                    value: 'Field Value 1',
                    inline: true,
                },
                {
                    name: 'Field 2',
                    value: 'Field Value 2',
                    inline: true,
                }
            ])

        await interaction.reply({
            embeds: [embed]
        })
    }
}