//发送消息模块
import GuildClient from "../client/client.js";
import fs from "fs";
import buffer from "node:buffer";
import path from "node:path";

/**
 * @param channel_id 频道ID
 * @param MsgBody 消息体
 * @param PrivateMsg 是否私聊
 * @param GuildType 机器人类型：私域 / 公域
 * @returns {Promise<void>} 返回发送结果
 */
async function sendMessage(channel_id, MsgBody, PrivateMsg, GuildType) {
    let client = await GuildClient(GuildType);

    const formData = new FormData();

    for (const [key, value] of Object.entries(MsgBody)) {
        if (value) {
            if (key === "file_image") {
                const buf = fs.readFileSync(value);
                formData.append(key, new buffer.File([buf.parent], path.basename(value)));
            } else if (key === "file") {
                formData.append(key, new buffer.File([value.parent], "image"));
            } else {
                formData.append(key, JSON.stringify(value));
            }
        }
    }

    client.messageApi.postMessage(channel_id, formData).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}

export default sendMessage;
