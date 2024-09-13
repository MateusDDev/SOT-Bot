import { Message, TextChannel } from 'discord.js';

export const pingCommand = (message: Message) => {
    if (!(message.channel instanceof TextChannel)) return;

    message.channel.send('Pong!');
};
