const util = require('util');
const JSZip = require('jszip');
const path = require('path');

function zip(torrent){
  var downloadZip = document.createElement('a')
  downloadZip.href = '#'
  downloadZip.target = '_blank'
  downloadZip.textContent = 'Download all files as zip'
  downloadZip.addEventListener('click', function (event) {
    var addedFiles = 0
    var zipFilename = path.basename(torrent.name, path.extname(torrent.name)) + '.zip'
    var zip = new JSZip()
    event.preventDefault()

    torrent.files.forEach(function (file) {
      file.getBlob(function (err, blob) {
        addedFiles += 1
        if (err) return util.error(err)

        // add file to zip
        zip.file(file.path, blob)

        // start the download when all files have been added
        if (addedFiles === torrent.files.length) {
          if (torrent.files.length > 1) {
            // generate the zip relative to the torrent folder
            zip = zip.folder(torrent.name)
          }
          zip.generateAsync({ type: 'blob' })
            .then(function (blob) {
              var url = URL.createObjectURL(blob)
              var a = document.createElement('a')
              a.download = zipFilename
              a.href = url
              a.click()
              setTimeout(function () {
                URL.revokeObjectURL(url)
              }, 30 * 1000)
            }, util.error)
        }
      });
    });
  });
  util.log(downloadZip);
}

module.exports = {zip}