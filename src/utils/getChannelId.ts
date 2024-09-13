import { Guild, TextChannel } from 'discord.js';

export const getChannelId = (guild: Guild, channelName: string): string | null => {
    const channel = guild.channels.cache.find(channel => channel.name === channelName) as TextChannel;


    return channel ? channel.id : null;
};
