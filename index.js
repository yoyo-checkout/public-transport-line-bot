const linebot = require('linebot');
const axios = require('axios');

const v2API = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2',
});
const v3API = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v3',
});

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

// 當有人傳送訊息給 Bot 時
bot.on('message', event => {
  switch (event.message.type) {
    case 'text':
      switch (event.message.text) {
        case '台鐵即時站點資訊':
          const rlt = v2API.get('/Rail/TRA/LiveTrainDelay?$top=1&$format=JSON');
          event.reply(rlt);
          break;
        case 'Me':
          event.source.profile().then(function (profile) {
            return event.reply('Hello ' + profile.displayName + ' ' + profile.userId);
          });
          break;
        case 'Picture':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://d.line-scdn.net/stf/line-lp/family/en-US/190X190_line_me.png',
            previewImageUrl: 'https://d.line-scdn.net/stf/line-lp/family/en-US/190X190_line_me.png'
          });
          break;
        case 'Location':
          event.reply({
            type: 'location',
            title: 'LINE Plus Corporation',
            address: '1 Empire tower, Sathorn, Bangkok 10120, Thailand',
            latitude: 13.7202068,
            longitude: 100.5298698
          });
          break;
        case 'Confirm':
          event.reply({
            type: 'template',
            altText: 'this is a confirm template',
            template: {
              type: 'confirm',
              text: 'Are you sure?',
              actions: [{
                type: 'message',
                label: 'Yes',
                text: 'yes'
              }, {
                type: 'message',
                label: 'No',
                text: 'no'
              }]
            }
          });
          break;
        case 'Multiple':
          return event.reply(['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']);
        case 'Total followers':
          bot.getTotalFollowers().then((result) => {
            event.reply('Total followers: ' + result.followers);
          });
          break;
        case 'Quota':
          bot.getQuota().then((result) => {
            event.reply('Quota: ' + result.value);
          });
          break;
        case 'Total reply':
          bot.getTotalReplyMessages().then((result) => {
            event.reply('Total reply messages: ' + result.success);
          });
          break;
        default:
          event.reply('很抱歉，我們無法理解您的疑問，請換個方式再問一次。');
          break;
      }
      break;
    default:
      event.reply('很抱歉，我們無法理解您的疑問，請換個方式再問一次。');
      break;
  }
});

// Bot 所監聽的 webhook 路徑與 port
// heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('LineBot is running');
});
