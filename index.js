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
                contents: [
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
                      size: 'full',
                      aspectRatio: '20:13',
                      aspectMode: 'cover',
                      action: {
                        type: 'uri',
                        uri: 'http://linecorp.com/',
                      },
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'text',
                          text: 'Brown Cafe',
                          weight: 'bold',
                          size: 'xl',
                        },
                        {
                          type: 'box',
                          layout: 'baseline',
                          margin: 'md',
                          contents: [
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png',
                            },
                            {
                              type: 'text',
                              text: '4.0',
                              size: 'sm',
                              color: '#999999',
                              margin: 'md',
                              flex: 0,
                            },
                          ],
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          margin: 'lg',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: 'Place',
                                  color: '#aaaaaa',
                                  size: 'sm',
                                  flex: 1,
                                },
                                {
                                  type: 'text',
                                  text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                                  wrap: true,
                                  color: '#666666',
                                  size: 'sm',
                                  flex: 5,
                                },
                              ],
                            },
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: 'Time',
                                  color: '#aaaaaa',
                                  size: 'sm',
                                  flex: 1,
                                },
                                {
                                  type: 'text',
                                  text: '10:00 - 23:00',
                                  wrap: true,
                                  color: '#666666',
                                  size: 'sm',
                                  flex: 5,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    footer: {
                      type: 'box',
                      layout: 'vertical',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'uri',
                            label: 'CALL',
                            uri: 'https://linecorp.com',
                          },
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'uri',
                            label: 'WEBSITE',
                            uri: 'https://linecorp.com',
                          },
                        },
                        {
                          type: 'spacer',
                          size: 'sm',
                        },
                      ],
                      flex: 0,
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
                      action: {
                        type: 'uri',
                        uri: 'http://linecorp.com/',
                      },
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'text',
                          text: 'Brown Cafe',
                          weight: 'bold',
                          size: 'xl',
                        },
                        {
                          type: 'box',
                          layout: 'baseline',
                          margin: 'md',
                          contents: [
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                            },
                            {
                              type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png',
                            },
                            {
                              type: 'text',
                              text: '4.0',
                              size: 'sm',
                              color: '#999999',
                              margin: 'md',
                              flex: 0,
                            },
                          ],
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          margin: 'lg',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: 'Place',
                                  color: '#aaaaaa',
                                  size: 'sm',
                                  flex: 1,
                                },
                                {
                                  type: 'text',
                                  text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                                  wrap: true,
                                  color: '#666666',
                                  size: 'sm',
                                  flex: 5,
                                },
                              ],
                            },
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: 'Time',
                                  color: '#aaaaaa',
                                  size: 'sm',
                                  flex: 1,
                                },
                                {
                                  type: 'text',
                                  text: '10:00 - 23:00',
                                  wrap: true,
                                  color: '#666666',
                                  size: 'sm',
                                  flex: 5,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    footer: {
                      type: 'box',
                      layout: 'vertical',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'uri',
                            label: 'CALL',
                            uri: 'https://linecorp.com',
                          },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
                        },
                        {
                          type: 'button',
                          style: 'link',
                          height: 'sm',
                          action: {
                            type: 'uri',
                            label: 'WEBSITE',
                            uri: 'https://linecorp.com',
                          },
                        },
                        {
                          type: 'spacer',
                          size: 'sm',
                        },
                      ],
                      flex: 0,
                    },
                  },
                ],
              },
            });

            // event.reply({
            //   type: 'template',
            //   altText: '很抱歉，我們不支援此裝置',
            //   template: {
            //     type: 'carousel',
            //     columns: [ // max 10
            //       {
            //         thumbnailImageUrl: 'https://fakeimg.pl/300/',
            //         text: '北北基',
            //         actions: [ // max 3
            //           {
            //             type: 'postback',
            //             label: '台北市',
            //             data: 'type=tra&action=getDistric&district=TPE',
            //           },
            //           {
            //             type: 'postback',
            //             label: '新北市',
            //             data: 'type=tra&action=getDistric&district=TPH',
            //           },
            //           {
            //             type: 'postback',
            //             label: '基隆市',
            //             data: 'type=tra&action=getDistric&district=KLU',
            //           },
            //           // {
            //           //   type: 'message',
            //           //   label: 'Buy',
            //           //   text: 'message',
            //           // },
            //           // {
            //           //   type: 'datetimepicker',
            //           //   label: 'Select date',
            //           //   data: 'storeId=12345',
            //           //   mode: 'time',
            //           //   initial: '00:00',
            //           //   max: '23:59',
            //           //   min: '00:00',
            //           // },
            //         ],
            //       },
            //       {
            //         thumbnailImageUrl: 'https://fakeimg.pl/300/',
            //         text: '桃竹',
            //         actions: [
            //           {
            //             type: 'postback',
            //             label: '桃園市',
            //             data: 'type=tra&action=getDistric&district=TYC',
            //           },
            //           {
            //             type: 'postback',
            //             label: '新竹縣',
            //             data: 'type=tra&action=getDistric&district=HSH',
            //           },
            //           {
            //             type: 'postback',
            //             label: '新竹市',
            //             data: 'type=tra&action=getDistric&district=HSC',
            //           },
            //         ],
            //       },
            //       {
            //         thumbnailImageUrl: 'https://fakeimg.pl/300/',
            //         text: '苗中彰',
            //         actions: [
            //           {
            //             type: 'postback',
            //             label: '苗栗縣',
            //             data: 'type=tra&action=getDistric&district=MAL',
            //           },
            //           {
            //             type: 'postback',
            //             label: '台中市',
            //             data: 'type=tra&action=getDistric&district=TXG',
            //           },
            //           {
            //             type: 'postback',
            //             label: '彰化縣',
            //             data: 'type=tra&action=getDistric&district=CWH',
            //           },
            //         ],
            //       },
            //       {
            //         thumbnailImageUrl: 'https://fakeimg.pl/300/',
            //         text: '雲嘉',
            //         actions: [
            //           {
            //             type: 'postback',
            //             label: '雲林縣',
            //             data: 'type=tra&action=getDistric&district=YLH',
            //           },
            //           {
            //             type: 'postback',
            //             label: '嘉義縣',
            //             data: 'type=tra&action=getDistric&district=CHY',
            //           },
            //           {
            //             type: 'postback',
            //             label: '嘉義市',
            //             data: 'type=tra&action=getDistric&district=CYI',
            //           },
            //         ],
            //       },
            //       {
            //         thumbnailImageUrl: 'https://fakeimg.pl/300/',
            //         text: '南高屏',
            //         actions: [
            //           {
            //             type: 'postback',
            //             label: '台南市',
            //             data: 'type=tra&action=getDistric&district=TNN',
            //           },
            //           {
            //             type: 'postback',
            //             label: '高雄市',
            //             data: 'type=tra&action=getDistric&district=KHH',
            //           },
            //           {
            //             type: 'postback',
            //             label: '屏東縣',
            //             data: 'type=tra&action=getDistric&district=IUH',
            //           },
            //         ],
            //       },
            //       {
            //         thumbnailImageUrl: 'https://fakeimg.pl/300/',
            //         text: '宜花東',
            //         actions: [
            //           {
            //             type: 'postback',
            //             label: '宜蘭縣',
            //             data: 'type=tra&action=getDistric&district=ILN',
            //           },
            //           {
            //             type: 'postback',
            //             label: '花蓮縣',
            //             data: 'type=tra&action=getDistric&district=HWA',
            //           },
            //           {
            //             type: 'postback',
            //             label: '台東縣',
            //             data: 'type=tra&action=getDistric&district=TTT',
            //           },
            //         ],
            //       },
            //     ],
            //   },
            // });
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
