const linebot = require('linebot');
// const express = require('express');

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

// const app = express();
// const linebotParser = bot.parser();
// app.post('/', linebotParser);

// 當有人傳送訊息給 Bot 時
bot.on('message', event => {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  event.reply(`你說了 ${event.message.text}.`);
});

// //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
// const server = app.listen(process.env.PORT || 8080, () => {
//   console.log(`process.env.PORT ${process.env.PORT}`);
//   const port = server.address().port;
//   console.log("App now running on port", port);
// });
// Bot 所監聽的 webhook 路徑與 port
// heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
bot.listen('/', process.env.PORT || 5000, function () {
  console.log(`process.env.PORT ${process.env.PORT}`);
  console.log('全國首家LINE線上機器人上線啦！！');
});
