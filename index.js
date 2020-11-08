const linebot = require('linebot');

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

// 當有人傳送訊息給 Bot 時
bot.on('message', event => {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  event.reply(`你說了 ${event.message.text}.`);
});

// Bot 所監聽的 webhook 路徑與 port
// heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('LineBot is running');
});
