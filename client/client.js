import {createOpenAPI} from 'qq-guild-bot';
import ReturnConfig from "../config/LoadConfig.js";

/**
 * 选择公域或私域
 * @param GuildType {string} 公域或私域
 * @returns {Promise<OpenAPI|string>}
 * @constructor
 */
async function GuildClient(GuildType) {
    if(GuildType === 'Private'){
        console.log("GuildClient[私域]")
        return createOpenAPI(await ReturnConfig(GuildType));
    }
    if(GuildType === 'Public'){
        console.log("GuildClient[公域]")
        return createOpenAPI(await ReturnConfig(GuildType));
    }
    console.log("GuildClient[没有指定公域或私域]")
    return "GuildClient[没有指定公域或私域]";
}

export default GuildClient;
