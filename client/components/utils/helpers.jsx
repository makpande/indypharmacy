var axios = require('axios');
var crypto = require('crypto');
var API_KEY = require('./keys.jsx');
var PRIV_KEY = require('./keys.jsx');

function getBios(username){
  var url = 'http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=' + username.split(' ').join('%20') + '&apikey='+API_KEY;
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
