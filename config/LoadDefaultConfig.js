import fs from "fs";

/**
 * @description 检测文件是否存在,加载默认配置
 * @returns {Promise<void>}
 * @constructor
 */
export async function LoadDefaultConfig() {
    const privateURL = `${process.cwd()}/plugins/QQGuild-Plugins/config/config/PrivateGuildConfig.json`;
    const publicURL = `${process.cwd()}/plugins/QQGuild-Plugins/config/config/PublicGuildConfig.json`;
    const PublicDefault = `${process.cwd()}/plugins/QQGuild-Plugins/config/default config/default_PublicConfig.json`;
    const PrivateDefault = `${process.cwd()}/plugins/QQGuild-Plugins/config/default config/default_PrivateConfig.json`;
    PublicDefault.replace(/\\/g, "/");
    PrivateDefault.replace(/\\/g, "/");
    // 检测文件是否存在
    if (!await isFileExist(privateURL) || !await isFileExist(publicURL)) {
        fs.copyFileSync(PublicDefault, publicURL);
        fs.copyFileSync(PrivateDefault, privateURL);
        logger.info(logger.cyan("首次启动QQGuild-Plugins喵~，欢迎使用，已创建PrivateGuildConfig、PublicGuildConfig"));
        logger.info(logger.cyan("请在plugins/QQGuild-Plugins/config/xxxxxGuildConfig.json中填入你的机器人信息~"));
        logger.info(logger.magenta(`---指令：【#开启公域/私域机器人】------`))
        logger.warn(logger.yellow(`发送指令前请先在config/config/xxx.json中填入公域/私域机器人配置`))
        logger.warn(logger.yellow(`---私域：PrivateGuildConfig 公域：PublicGuildConfig------`))
    }
}

export function isFileExist(isFilePath) {
    return new Promise((resolve, reject) => {
        isFilePath = ChangePath(isFilePath);
        fs.access(isFilePath, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

export function ChangePath(changePath) {
    return changePath.replace(/\\/g, "/");
}