var axios = require('axios');
var crypto = require('crypto');

var API_KEY = process.env['API_KEY'];
var PRIV_KEY = process.env['PRIV_KEY'];

function getBios(username){
  var url = '//gateway.marvel.com:80/v1/public/characters?nameStartsWith=' + username.split(' ').join('%20') + '&apikey='+API_KEY;
  var ts = new Date().getTime();
  var hash = crypto.createHash('md5').update(ts + PRIV_KEY + API_KEY).digest('hex');
    url += "&ts="+ts+"&hash="+hash;
  return axios.get(url);
};

var helpers = {
  getMarvelInfo: function(username){
    return axios.all([getBios(username)])
      .then(function(arr){
        return {
          bios: arr[0].data
        }
      });
  }
};

module.exports = helpers;


// You're exporting an object with properties called API_KEY and PRIV_KEY:
// So dance your pants off to
// A Certain Ratio

//
// var API_KEY = require('./keys.jsx').API_KEY;
// var PRIV_KEY = require('./keys.jsx').PRIV_KEY;
