const express = require('express');
const app = express();
const request = require('request');
const path = require('path');

require('dotenv').config();
var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
var Base64 = require("crypto-js/enc-base64");

// 미들웨어 함수를 특정 경로에 등록
app.use('/api/data', function(req, res) {
    res.json({ greeting: 'Hello World' });
});
app.get('/sms/:phone/:store', (req, res) => {
  const paramObj = req.params;
  send_message(paramObj.phone, paramObj.store);
  res.send("complete!");
});
// 기본 포트를 app 객체에 설정

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("../build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("../build", "index.html"))
  );
}

const port = process.env.PORT || 3001;
app.listen(port);
console.log(`server running at http ${port}`);

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

