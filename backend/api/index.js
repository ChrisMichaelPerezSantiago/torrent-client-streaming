const express = require('express');
const router = express.Router();

router.get('/' , (req , res) =>{
  res.json({
    message: '✨ Welcome To API Main End Point ✨'
  });
});

module.exports = router;