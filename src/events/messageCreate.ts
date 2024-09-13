import { Message, Role, TextChannel } from 'discord.js';
import { pingCommand } from '../commands/ping';
import { PREFIX } from '../config/botConfig';
import { searchMembersCommand } from '../commands/searchMembers';

export const handleMessage = (message: Message) => {
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;

    const msg = message.content.slice(PREFIX.length);
    const [cmd, ...args] = msg.split(' ');
    const command = cmd.toLowerCase();

    if (command === 'ping') {
        pingCommand(message);
    }
    if (command === 'procurar-membros') {
        if (!(message.channel instanceof TextChannel)) return;

        if (!message.guild)
            return;

        searchMembersCommand(message, args.join(' '))
    }
};
