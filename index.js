const linebot = require('linebot');
const express = require('express');
const dotenv = require('dotenv').config();

console.log(process.env.CHANNEL_ID);

// const bot = linebot({
//   channelId: channel Id,
//   channelSecret: channel Secret,
//   channelAccessToken: channel Access Token
// });
