var speed = document.querySelector('.speed');

exports.log = function log(str) {
  var p = document.createElement('p');
  p.innerHTML = str;
  document.querySelector('.log').appendChild(p);
}

exports.error = function error(err){
  console.error(err.stack || err.message || err);
  var p = exports.log(err.message || err);
  p.style.color = 'red'
  p.style.fontWeight = 'bold'
}

exports.warning = function warning(err){
  console.error(err.stack || err.message || err);
  exports.log(err.message || err);
}

exports.updateSpeed = function updateSpeed(str){
  speed.innerHTML = str;
}