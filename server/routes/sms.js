const express = require('express');
const { send_message } = require('../utils/Ncp');

const router = express.Router();
/* Create user or Read user */
router.get('/:phone/:storeName', async (req, res) => {
  try{
    const {phone, storeName} = req.params;
    send_message(phone, storeName);
    return res.status(200).json({success:true});
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.toString(),
    });
  }
});

module.exports = router;