import {createWebsocket} from 'qq-guild-bot';
import ReturnConfig from "../config/LoadConfig.js";
import PluginsLoader from "../../../lib/plugins/loader.js"
async function StartPrivate(e) {
    const GuildConfig = await ReturnConfig("Public");
    const ws = createWebsocket(GuildConfig);

    const eventHandlers = {
        READY: (data) => handleEvent('READY', data),
        ERROR: (data) => handleEvent('ERROR', data),
        GUILDS: (data) => handleEvent('GUILDS', data),
        PUBLIC_GUILD_MESSAGES: (data) => handleEvent('消息事件', data),
        GUILD_MESSAGE_REACTIONS: (data) => handleEvent('为消息[添加/删除]表情表态', data),
        DIRECT_MESSAGE: (data) => handleEvent('收到私信/撤回消息', data),
        OPEN_FORUMS_EVENT: (data) => handleEvent('论坛事件', data),
        AUDIO_OR_LIVE_CHANNEL_MEMBER: (data) => handleEvent('用户进入/离开音频/直播频道', data),
        INTERACTION: (data) => handleEvent('互动事件', data),
        MESSAGE_AUDIT: (data) => handleEvent('消息审核', data),
        FORUMS_EVENT: (data) => handleEvent('论坛事件', data),
        AUDIO_ACTION: (data) => handleEvent('音频/麦', data),
    }

    async function handleEvent(eventName, eventData) {
        if (eventName === "READY") {
            logger.info(logger.cyan(`[公域][${eventData.msg.user.username}] 已上线`))
            e.reply('【公域频道机器人】已启动监听，当前版本仅控制台监听效果，事件处理还在完善中...，欢迎加入开发，个人的时间精力是有限的呜呜ww..~')
            return Promise.resolve();
        }
        logger.info(logger.cyan(`[私域][${eventName}]:`))
        logger.info(logger.cyan(eventData))
        return Promise.resolve();
    }

    function registerEvents(ws) {
        Object.entries(eventHandlers).forEach(([eventName, handler]) => {
            ws.on(eventName, handler);
        });
    }
    registerEvents(ws);
}
export default StartPrivate;
