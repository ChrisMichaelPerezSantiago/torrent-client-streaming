const PirateBay = require('thepiratebay');

// 205 =>  TV-Show
const tvShows = async() =>{
  const torrents = await PirateBay.topTorrents(205);
  const promises = [];
  torrents.forEach((data) =>{
    promises.push(data);
  });
  return await Promise.all(promises);
};

module.exports = {tvShows};

