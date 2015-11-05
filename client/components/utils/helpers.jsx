var axios = require('axios');
var crypto = require('crypto');
var API_KEY = '86e8919c441293aef435c128e5b5c53a';
var PRIV_KEY = '69d6ed4a422e1251eb1a374b9df8b2f7459834dd';

function getBios(username){
  var url = 'http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=' + username.split(' ').join('%20') + '&apikey='+API_KEY;
  var ts = new Date().getTime();
  var hash = crypto.createHash('md5').update(ts + PRIV_KEY + API_KEY).digest('hex');
    url += "&ts="+ts+"&hash="+hash;
    console.log(url);
  return axios.get(url);
};

var helpers = {
  getMarvelInfo: function(username){
    return axios.all([getBios(username)])
      .then(function(arr){
        console.log(arr)
        return {
          bios: arr[0].data
        }
      });
  }
};

module.exports = helpers;
