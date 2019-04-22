const PirateBay = require('thepiratebay');

// 208 => HD TV-Show
const movies = async() =>{
  const torrents = await PirateBay.topTorrents(201);
  const promises = [];
  torrents.forEach((data) =>{
    promises.push(data);
  });
  return await Promise.all(promises);
};

module.exports = {movies};

