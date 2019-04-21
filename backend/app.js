const express = require('express');
const cors = require('cors');
const app = express();

const middleware = require('./middleware');
const api = require('./api');

app.get('/' , (req , res) =>{
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use(cors());
app.use(express.json());

app.use('/api/v1' , api);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;