import {createWebsocket} from 'qq-guild-bot';
import LoadConfig from "../config/LoadConfig.js";
import sendMessage from "../system/sendMsg.js";


async function StartPublic() {
    const GuildConfig = await LoadConfig("Public");
    const ws = createWebsocket(GuildConfig);

    function registerEvents(ws) {
        ws.on('READY', (wsdata) => {
            console.log('[公域][READY]:', wsdata);
        });
        ws.on('ERROR', (data) => {
            console.log('[公域][ERROR]:', data);
        });
        ws.on('GUILDS', (data) => {
            console.log('[公域][GUILDS]:', data);
        });
        ws.on('GUILD_MEMBERS', (data) => {
            console.log('[公域][成员变动]:', data);
        });
        ws.on('PUBLIC_GUILD_MESSAGES', async (data) => {
            console.log('[公域][消息事件]:', data);
            // await PostMsgBody(data.msg.channel_id, {content: 'messageApi接口触发: ' + data.msg.content}, data.msg.direct_message, "Public")
            await sendMessage(data.msg.channel_id, {content: 'messageApi接口触发: ' + data.msg.content}, data.msg.direct_message, "Public");
        });
        ws.on('GUILD_MESSAGE_REACTIONS', (data) => {
            console.log('[公域][为消息[添加/删除]表情表态]:', data);
        });
        ws.on('DIRECT_MESSAGE', (data) => {
            console.log('[公域][收到私信/撤回消息]:', data);
        });
        ws.on('OPEN_FORUMS_EVENT', (data) => {
            console.log('[公域][论坛事件]:', data);
        });
        ws.on('AUDIO_OR_LIVE_CHANNEL_MEMBER', (data) => {
            console.log('[公域][用户[进入/离开][视频/直播]子频道]:', data);
        });
        ws.on('INTERACTION', (data) => {
            console.log('[公域][互动事件]:', data);
        });
        ws.on('MESSAGE_AUDIT', (data) => {
            console.log('[公域][消息审核]:', data);
        });
        ws.on('AUDIO_ACTION', (data) => {
            console.log('[公域][音频/麦]:', data);
        });
    }

    // 注册所有事件
    registerEvents(ws);
}

export default StartPublic;

