const express = require('express');
const router = express.Router();
const data = require('./data');

router.get('/' , (req , res) =>{
  res.json({
    message: '✨ Welcome To API Main End Point ✨'
  });
});

router.use('/content' , data);

module.exports = router;