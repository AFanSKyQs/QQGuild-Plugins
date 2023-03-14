import plugin from "../../../lib/plugins/plugin.js";
import StartPrivate from "../listener/ListenerPrivate.js";
import StartPublic from "../listener/ListenerPublic.js";
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
            },{
                reg: /^#(启动|打开|开启|open)(公域|私域)频道机器人$/,
                fnc: 'StartRun'
            }
            ]
        })
    }
    async StartRun(e){
        if(!e.isMaster) return true
        if(e.msg){
            if(e.msg.match(/公域/)) {
                await StartPublic(e)
                return true
            }else if(e.msg.match(/私域/)){
                await StartPrivate(e)
                return true
            }
            return false
        }
        return false
    }
}