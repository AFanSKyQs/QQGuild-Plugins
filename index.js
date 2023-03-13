import fs from 'fs'

Bot.logger.info('-------------^_^--------------')
Bot.logger.info(`----QQGuild-Plugin开始载入-----`)
Bot.logger.info(`----Author[0]：AFanSKyQs-----`)
logger.warn(logger.yellow(`---指令：【#开启公域/私域机器人】------`))
logger.warn(logger.yellow(`发送指令前请先在config/xxx.json中填入公域/私域机器人配置`))
logger.warn(logger.yellow(`---私域：PrivateGuildConfig 公域：PublicGuildConfig------`))
const files = fs.readdirSync('./plugins/QQGuild-Plugin/apps').filter(file => file.endsWith('.js'))
let ret = []
files.forEach((file) => {
    ret.push(import(`./apps/${file}`))
})
ret = await Promise.allSettled(ret)
let apps = {}
let APackageFanError = 0
for (let i in files) {
    let name = files[i].replace('.js', '')
    if (ret[i].status !== 'fulfilled') {
        logger.error(`载入插件错误：${logger.red(name)}`)
        const ARegexFan = /Cannot find package '([^']+)'/;
        let AFanReaSon = ret[i].reason+""
        const AMatchFan = AFanReaSon.match(ARegexFan);
        if (AMatchFan) {
            const APackageNameY = AMatchFan[1];
            logger.warn(`请运行：${logger.red(`pnpm add ${APackageNameY} -w`)}安装依赖`)
            APackageFanError++
        }else{
          logger.error(ret[i].reason)
        }
        delete apps[name];
        continue
    }
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}
Bot.logger.info(`----QQGuild-Plugin载入完成-----`)
if(APackageFanError>0){
  logger.warn(logger.yellow(`---报错请按提示安装依赖，否则对应功能会无效喵！------`))
  logger.warn(logger.yellow(`---报错请按提示安装依赖，否则对应功能会无效喵！------`))
}
export {apps}