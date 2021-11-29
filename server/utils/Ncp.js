const request = require('request');
var CryptoJS = require("crypto-js");
module.exports = {
  send_message(phone, store) {
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
    return new Promise((resolve, reject) => {
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
    });
  }
}
