import { Channel, Guild, GuildMember, Message, Ready, User } from "../../types";
import { Presence } from "../../types/events/Presence";

export interface ListEvents {
    ApplicationCommandPermissionsUpdate : [],
    ChannelCreate : [ channel: Channel ],
    ChannelDelete : [ channel: Channel ],
    ChannelPinsUpdate : [],
    ChannelUpdate : [ channel: Channel ],
    GuildBanAdd : [],
    GuildBanRemove : [],
    GuildCreate : [ guild: Guild ],
    GuildDelete : [ guild: Guild ],
    GuildEmojisUpdate : [],
    GuildIntegrationsUpdate : [],
    GuildMemberAdd : [ member: GuildMember ],
    GuildMemberRemove : [ member: GuildMember ],
    GuildMembersChunk : [ members: GuildMember[] ],
    GuildMemberUpdate : [ NewMember: GuildMember, OldMember?: GuildMember],
    GuildRoleCreate : [],
    GuildRoleDelete : [],
    GuildRoleUpdate : [],
    GuildStickersUpdate : [],
    GuildUpdate : [ guild: Guild ],
    IntegrationCreate : [],
    IntegrationDelete : [],
    IntegrationUpdate : [],
    InteractionCreate : [],
    InviteCreate : [],
    InviteDelete : [],
    MessageCreate : [ message: Message ],
    MessageDelete : [ message: Message ],
    MessageDeleteBulk : [],
    MessageReactionAdd : [],
    MessageReactionRemove : [],
    MessageReactionRemoveAll : [],
    MessageReactionRemoveEmoji : [],
    MessageUpdate : [ New: Message, Old: Message | undefined ],
    PresenceUpdate : [ presence: Presence ],
    StageInstanceCreate : [],
    StageInstanceDelete : [],
    StageInstanceUpdate : [],
    Ready : [ ready: Ready ],
    Resumed : [],
    ThreadCreate : [],
    ThreadDelete : [],
    ThreadListSync : [],
    ThreadMembersUpdate : [],
    ThreadMemberUpdate : [],
    ThreadUpdate : [],
    TypingStart : [],
    UserUpdate : [ user: User ],
    VoiceServerUpdate : [],
    VoiceStateUpdate : [],
    WebhooksUpdate : [],
    GuildScheduledEventCreate : [],
    GuildScheduledEventUpdate : [],
    GuildScheduledEventDelete : [],
    GuildScheduledEventUserAdd : [],
    GuildScheduledEventUserRemove : [],
    AutoModerationRuleCreate : [],
    AutoModerationRuleUpdate : [],
    AutoModerationRuleDelete : [],
    AutoModerationActionExecution : [],
    GuildAuditLogEntryCreate : [],
};

export type EventsHandler =  {
    [K in keyof ListEvents]: (...args: ListEvents[K]) => unknown;
};
