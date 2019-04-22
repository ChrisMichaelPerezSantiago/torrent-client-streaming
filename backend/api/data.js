const express = require('express');
const router = express.Router();

const TVS = require('./tvshow/index');
const MOVIES = require('./movies/index');


router.get('/tvshow' , (req , res) =>{
  TVS.tvShows().then((data) =>{
    res.status(200).json(data);
  });
});

router.get('/movies' , (req , res) =>{
  MOVIES.movies().then((data) =>{
    res.status(200).json(data);
  });
});

module.exports = router;