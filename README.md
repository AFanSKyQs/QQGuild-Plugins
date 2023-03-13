# QQGuild-Plugins
基于Yunzai-Bot和Miao-Yunzai的频道消息处理插件，作用于监听频道消息，转云崽处理，处理完成再返回频道。

⭐注意⭐：⭐默认在监听里面加了个回复测试，有什么消息机器人就会类似复读，所以开发尽量【新创建一个机器人】在【沙盒频道】再启动⭐

⭐启动指令并不会影响原有频道插件，相当于新创建链接⭐

## 一、拉取项目：Yunzai-Bot/Miao-Yunzai根目录下：
```
git clone https://github.com/AFanSKyQs/QQGuild-Plugins.git ./plugins/QQGuild-Plugins/
```
## 二、安装一下官方SDK（我这没有调依赖，应可放心pnpm）：
```
pnpm add qq-guild-bot -w
```


## 三、打开文件配置【`config/PrivateGuildConfig`】或【`config/PublicGuildConfig`】，`Private`为私域机器人,`Public`为公域：
```
config/PrivateGuildConfig.json
config/PublicGuildConfig.json
```

## 四、启动机器人指令（根据你的配置来启动）：
```
QQ给某机器人发送即可

#开启公域频道机器人

#开启私域频道机器人
```

❤更多的文件说明正在完善，欢迎大佬们加入开发！❤
