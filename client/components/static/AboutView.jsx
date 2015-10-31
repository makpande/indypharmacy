var React = require('react');
var crypto = require('crypto');
var API_KEY = '86e8919c441293aef435c128e5b5c53a';
var PRIV_KEY = '69d6ed4a422e1251eb1a374b9df8b2f7459834dd';


module.exports = React.createClass({
  render: function() {
    var url = "http://gateway.marvel.com:80/v1/public/characters?name=rhino&apikey="+API_KEY;
    var ts = new Date().getTime();
    var hash = crypto.createHash('md5').update(ts + PRIV_KEY + API_KEY).digest('hex');
      url += "&ts="+ts+"&hash="+hash;
    return (
      <div id="about-view">
        <h1>about textual spews</h1>
        <p>{url} a test app integrating stateless rails api with routing react client frontend</p>
      </div>
    );
  }
});

// companion component to View, used as examplar of component-based routing under react-router <Handler />
