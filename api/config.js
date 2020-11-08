const axios = require('axios');
const jsSHA = require('jssha');

const AppID = process.env.PTX_APP_ID;
const AppKey = process.env.PTX_APP_KEY;

const GMTString = new Date().toGMTString();
const ShaObj = new jsSHA('SHA-1', 'TEXT');
ShaObj.setHMACKey(AppKey, 'TEXT');
ShaObj.update(`x-date: ${GMTString}`);
const HMAC = ShaObj.getHMAC('B64');
const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

const headers = {
  Authorization,
  'X-Date': GMTString,
  'Accept-Encoding': 'gzip, deflate',
}

const v2 = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2',
  headers,
});
const v3 = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v3',
  headers,
});

module.exports = {
  v2,
  v3,
};
