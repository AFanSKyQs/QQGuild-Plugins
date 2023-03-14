import plugin from "../../../lib/plugins/plugin.js";
import StartPrivate from "../system/listener/ListenerPrivate.js";
import StartPublic from "../system/listener/ListenerPublic.js";
import fs from "fs";

export class StartRun extends plugin {
    constructor() {
        super({
            name: '启动频道机器人',
            dsc: '启动频道机器人',
            event: 'message',
            priority: 0,
            rule: [{
                reg: /^#(启动|打开|开启|open)频道机器人(公域|私域)$/,
                fnc: 'StartRun'
            }, {
                reg: /^#(启动|打开|开启|open)(公域|私域)频道机器人$/,
                fnc: 'StartRun'
            }
            ]
        })
    }

    async StartRun(e) {
        if (!e.isMaster) return true
        if (e.msg) {
            if (e.msg.match(/公域/)) {
                if (await this.ReadJSON(e, "Public")) {
                    await StartPublic(e)
                }
                return true
            } else if (e.msg.match(/私域/)) {
                if (await this.ReadJSON(e, "Private")) {
                    await StartPrivate(e)
                }
                return true
            }
            return false
        }
        return false
    }

    async ReadJSON(e, type) {
        const privateURL = `${process.cwd()}/plugins/QQGuild-Plugins/config/config/PrivateGuildConfig.json`;
        const publicURL = `${process.cwd()}/plugins/QQGuild-Plugins/config/config/PublicGuildConfig.json`;
        if (type === "Public") {
            let Public = JSON.parse(fs.readFileSync(publicURL));
            if (Public["token机器人令牌"] === "你的机器人令牌") {
                e.reply("请先在 QQGuild-Plugins/config/config/PublicGuildConfig.json 配置[公域]机器人ID与令牌")
                return false
            }
        }
        if (type === "Private") {
            let Private = JSON.parse(fs.readFileSync(privateURL));
            if (Private["token机器人令牌"] === "你的机器人令牌") {
                e.reply("请先打开 QQGuild-Plugins/config/config/PrivateGuildConfig.json 配置[私域]机器人ID与令牌")
                return false
            }
        }
        return true
    }
}