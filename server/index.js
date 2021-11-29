const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();
const smsRouter = require('./routes/sms');
app.set('port', process.env.PORT || 3001);
app.get("/", async(req, res)=>{
  res.status(200).json({"sucess":"true"});
})
app.use(express.json());
app.use(cors());
app.use('/sms', smsRouter);

app.listen(app.get('port'), 5000, () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

