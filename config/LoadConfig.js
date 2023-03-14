import fs from "fs";

// let PrivateGuildConfig = `E:/Bot_V3/yunzai/Yunzai-Bot/plugins/QQGuild-Plugins/config/PrivateGuildConfig.json`;
// let PublicGuildConfig = `E:/Bot_V3/yunzai/Yunzai-Bot/plugins/QQGuild-Plugins/config/PublicGuildConfig.json`;
let PublicGuildConfig = `${process.cwd()}/plugins/QQGuild-Plugins/config/PublicGuildConfig.json`;
let PrivateGuildConfig = `${process.cwd()}/plugins/QQGuild-Plugins/config/PrivateGuildConfig.json`;

/**
 * 返回配置文件
 * @param GuildType {string} 机器人域类型 "Public"或 "Private"
 * @returns {Promise<{}>}   返回配置文件
 * @constructor
 */
async function ReturnConfig(GuildType) {
    //懒得使用yaml了，直接使用json，缺点是不支持内部注释，所以直接中文了，但是读取方便解析快
    let GuildConfig = {};
    if (GuildType === "Public") {
        let JSON_PATH = PublicGuildConfig.replace(/\\/g, "/");
        let PublicConfig_Json = JSON.parse(fs.readFileSync(JSON_PATH));
        GuildConfig['appID'] = PublicConfig_Json['BotAppId'];
        GuildConfig['token'] = PublicConfig_Json['token机器人令牌'];
        GuildConfig['intents'] = PublicConfig_Json['intents监听事件'];
        GuildConfig['sandbox'] = PublicConfig_Json['sandbox沙箱模式'];
    }
    if (GuildType === "Private") {
        let JSON_PATH = PrivateGuildConfig.replace(/\\/g, "/");
        let PrivateConfig_Json = JSON.parse(fs.readFileSync(JSON_PATH));
        GuildConfig['appID'] = PrivateConfig_Json['BotAppId'];
        GuildConfig['token'] = PrivateConfig_Json['token机器人令牌'];
        GuildConfig['intents'] = PrivateConfig_Json['intents监听事件'];
        GuildConfig['sandbox'] = PrivateConfig_Json['sandbox沙箱模式'];
    }
    return GuildConfig;
}
export default ReturnConfig;
