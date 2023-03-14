import {createOpenAPI} from 'qq-guild-bot';
import ReturnConfig from "../../config/LoadConfig.js";

/**
 * 选择公域或私域
 * @param GuildType {string} 公域或私域
 * @returns {Promise<OpenAPI|string>}
 * @constructor
 */
async function GuildClient(GuildType) {
    if (GuildType === 'Private') {
        logger.info(logger.cyan("[加载完成][私域]"))
        return createOpenAPI(await ReturnConfig(GuildType));
    } else if (GuildType === 'Public') {
        logger.info(logger.cyan("[加载完成][公域]"))
        return createOpenAPI(await ReturnConfig(GuildType));
    } else {
        logger.info(logger.red("[加载错误][没有指定公域或私域]"))
        return "[加载错误][没有指定公域或私域]";
    }
}

export default GuildClient;
