const linebot = require('linebot');
const apiModules = require('./api');

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

// 當有 postback 傳回給 Bot 時
bot.on('postback', async (event) => {
  console.log(event);
});

// 當有人傳送訊息給 Bot 時
bot.on('message', async (event) => {
  console.log(event);
  switch (event.message.type) {
    case 'text':
      switch (event.message.text) {
        case '台鐵即時站點資訊':
          try {
            // const { data } = await apiModules.fetchLiveTrainDelay({ stationId: '1020' });
            // console.log(data);
            event.reply({
              type: 'flex',
              altText: '請選擇要查詢的區域',
              contents: {
                type: 'carousel',
                contents: [ // max 12 bubbles
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                      size: 'full',
                      aspectRatio: '20:13',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      paddingAll: 'md',
                      paddingBottom: 'none',
                      contents: [
                        {
                          type: 'text',
                          text: '北北基',
                          weight: 'bold',
                          size: 'xl',
                          align: 'center',
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '台北市',
                            data: 'type=tra&action=getDistric&district=TPE',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '新北市',
                            data: 'type=tra&action=getDistric&district=TPH',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '基隆市',
                            data: 'type=tra&action=getDistric&district=KLU',
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                      size: 'full',
                      aspectRatio: '20:13',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      paddingAll: 'md',
                      paddingBottom: 'none',
                      contents: [
                        {
                          type: 'text',
                          text: '桃竹苗',
                          weight: 'bold',
                          size: 'xl',
                          align: 'center',
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '桃園市',
                            data: 'type=tra&action=getDistric&district=TYC',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '新竹市',
                            data: 'type=tra&action=getDistric&district=HSC',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '新竹縣',
                            data: 'type=tra&action=getDistric&district=HSH',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '苗栗縣',
                            data: 'type=tra&action=getDistric&district=MAL',
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                      size: 'full',
                      aspectRatio: '20:13',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      paddingAll: 'md',
                      paddingBottom: 'none',
                      contents: [
                        {
                          type: 'text',
                          text: '中彰投',
                          weight: 'bold',
                          size: 'xl',
                          align: 'center',
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '台中市',
                            data: 'type=tra&action=getDistric&district=TXG',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '彰化縣',
                            data: 'type=tra&action=getDistric&district=CWH',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '南投縣',
                            data: 'type=tra&action=getDistric&district=NTO',
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                      size: 'full',
                      aspectRatio: '20:13',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      paddingAll: 'md',
                      paddingBottom: 'none',
                      contents: [
                        {
                          type: 'text',
                          text: '雲嘉南',
                          weight: 'bold',
                          size: 'xl',
                          align: 'center',
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '雲林縣',
                            data: 'type=tra&action=getDistric&district=YLH',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '嘉義市',
                            data: 'type=tra&action=getDistric&district=CYI',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '嘉義縣',
                            data: 'type=tra&action=getDistric&district=CHY',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '台南市',
                            data: 'type=tra&action=getDistric&district=TNN',
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                      size: 'full',
                      aspectRatio: '20:13',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      paddingAll: 'md',
                      paddingBottom: 'none',
                      contents: [
                        {
                          type: 'text',
                          text: '高屏',
                          weight: 'bold',
                          size: 'xl',
                          align: 'center',
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '高雄市',
                            data: 'type=tra&action=getDistric&district=KHH',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '屏東縣',
                            data: 'type=tra&action=getDistric&district=IUH',
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                      size: 'full',
                      aspectRatio: '20:13',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      paddingAll: 'md',
                      paddingBottom: 'none',
                      contents: [
                        {
                          type: 'text',
                          text: '宜花東',
                          weight: 'bold',
                          size: 'xl',
                          align: 'center',
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '宜蘭縣',
                            data: 'type=tra&action=getDistric&district=ILN',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '花蓮縣',
                            data: 'type=tra&action=getDistric&district=HWA',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'postback',
                            label: '台東縣',
                            data: 'type=tra&action=getDistric&district=TTT',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            });
          } catch (error) {
            console.log(error);
            event.reply('系統繁忙中，請稍後再試');
          }

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
