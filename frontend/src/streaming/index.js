const concat = require('concat-stream');
const dragDrop = require('drag-drop/buffer');
const WebTorrent = require('webtorrent');
const moment = require('moment');
const prettierBytes = require('prettier-bytes');
const throttle = require('throttleit');
const util = require('./util');
const downloadAs = require('./zip');
const client = new WebTorrent();

localStorage.debug = '*';

//const FAKE = ['b560a21ebfead8f6feb54706f41f459f819c0ae5'];

client.on('error', util.warning);

dragDrop('body' , (files) =>{
  client.seed(files , onTorrent);
});

init();
function init(){
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    var torrentId = document.querySelector('form input[name=torrentId]').value
    util.log('Adding ' + torrentId)
    client.add(torrentId, onTorrent)
  });
}


//onHashChange()
//window.addEventListener('hashchange', onHashChange)
//function onHashChange () {
//  var hash = decodeURIComponent(window.location.hash.substring(1)).trim()
//  if (hash !== ''){
//    downloadTorrent(hash)
//  }
//}
//
//
//function downloadTorrent(id){
//  var fake = FAKE.some(function(infohash){
//    return id.indexOf(infohash) >= 0
//  });
//  if(fake){
//    util.log('File not found');
//  }else{
//    util.log('Downloading torrent from ' + id);
//    client.add(id , onTorrent)
//  }
//}


var _Torrent;
function onTorrent(torrent){
  _Torrent = torrent;
  torrent.on('warning' , util.warning);
  torrent.on('error' , util.error);
  
  util.log('Got torrent metadata!')
  util.log(
    'Torrent info hash: ' + torrent.infoHash + ' ' +
    '<a href="' + torrent.magnetURI + '" target="_blank">[Magnetlink]</a> ' +
    '<a href="' + torrent.torrentFileBlobURL + '" target="_blank" download="' + torrent.name + '.torrent">[Download .torrent]</a>'
  );

  torrent.on('download', throttle(updateSpeed, 250))
  torrent.on('upload', throttle(updateSpeed, 250))
  setInterval(updateSpeed, 5000)
  updateSpeed()
  

  var file = torrent.files.find(function (file){
    return file.name.endsWith('.mp4')
  });
  
  file.appendTo('.log');
}

function updateSpeed(){
  var progress = (100 * _Torrent.progress).toFixed(1);
  
  var rem;
  if(_Torrent.done){
    rem = 'Done.';
  }else{
    rem = moment.duration(_Torrent.timeRemaining / 1000, 'seconds').humanize()
    rem = rem[0].toUpperCase() + rem.substring(1) + ' remaining.'
  }

  util.updateSpeed(
    '<b>Peers:</b> ' + _Torrent.numPeers + ' ' +
    '<b>Progress:</b> ' + progress + '% ' +
    '<b>Download speed:</b> ' + prettierBytes(client.downloadSpeed) + '/s ' +
    '<b>Upload speed:</b> ' + prettierBytes(client.uploadSpeed) + '/s ' +
    '<b>ETA:</b> ' + rem
  );

  // fix download zip
  // downloadAs.zip(_Torrent);
}