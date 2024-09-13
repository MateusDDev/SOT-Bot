import { Message, TextChannel } from "discord.js";
import { getChannelId } from "../utils/getChannelId";

export const searchMembersCommand = (message: Message, stack: string) => {
    if (!(message.channel instanceof TextChannel)) return;

    if (!message.guild)
        return message.channel.send('Este comando só pode ser usado em um servidor.');

    if (!stack)
        return message.channel.send('Insira alguma stack para a pesquisa')

    const channelId = getChannelId(message.guild, '💡┃ideias');
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === stack.toLowerCase());

    if (!role)
        return message.channel.send(`Não encontrei "${stack}" no server, mas você pode sugerir novas stacks em <#${channelId}>`);

    const membersWithRole = message.guild.members.cache.filter((member) => member.roles.cache.has(role.id))

    if (membersWithRole.size === 0)
        return message.channel.send(`Nenhum membro possui conhecimento sobre ${role} no momento`);

    const memberList = membersWithRole.map((member) => `- ${member.user.tag}`).join('\n');
    return message.channel.send(`Membros com conhecimento sobre ${role.name}:\n${memberList}`);
}