const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./routes/index');
const request = require('request');
const path = require('path');

require('dotenv').config();
var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
var Base64 = require("crypto-js/enc-base64");
  //"client/build"는 react의 build파일 경로이다
    app.use(express.static("src/build"));
  
  //"..client"는 react 프로젝트의 파일 경로, "build"는 react프로젝트 내의 build폴더이다
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../src", "build", "index.html"));
    });
app.use('/api', api);
app.use(cors());
app.get('/', (req, res) =>
  res.send({ greeting: 'Hello React x Node.js' })
);

app.get('/sms/:phone/:store', (req, res) => {
  const paramObj = req.params;
  send_message(paramObj.phone, paramObj.store);
  res.send("complete!");
});

function send_message(phone, store) {
  var user_phone_number = phone;
  var resultCode = 404;
  const date = Date.now().toString();
  const uri = process.env.SERVICE_ID;
  const secretKey = process.env.NCP_SECRET_KEY;
  const accessKey = process.env.NCP_KEY;
  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
  const url2 = `/sms/v2/services/${uri}/messages`;
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);
  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);
  request({
    method: method,
    json: true,
    uri: url,
    headers: {
      "Contenc-type": "application/json; charset=utf-8",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": date,
      "x-ncp-apigw-signature-v2": signature,
    },
    body: {
      type: "SMS",
      countryCode: "82",
      from: "01040534282",
      content: `고객님, ${store} 입장하실 차례입니다!\n(5분이내 입장없으실 경우 대기취소됩니다.)`,
      messages: [
        { to: `${user_phone_number}`, },],
    },
  },
    function (err, res, html) {
      if (err) console.log(err);
      else { resultCode = 200; console.log(html); }
    }
  );
  return resultCode;
}

const port = 3001;
app.listen(port, () => {
  console.log(`express is running on ${port}`);
})
