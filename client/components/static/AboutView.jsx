var React = require('react');



module.exports = React.createClass({
  render: function() {
    return (
      <div id="about-view">
        <h1>Indy Pharmacy Blog</h1>
        <li>a testing app integrating stateless rails backend with a <a href="https://facebook.github.io/react/">react</a> client frontend.</li>
        <li>app will utilize <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS">cors</a> (cross origin requests) to serve data between backend and frontend</li>
        <li>module-bundling provided by <a href="https://webpack.github.io/">webpack</a></li>
        <li>clientside routing provided by <a href="https://github.com/rackt/react-router">react-router</a></li>
        <li>css modules provided by <a href="http://purecss.io/">pure css</a></li>
        <li>api data integration (spews) provided by <a href="https://github.com/rails-api/rails-api">rails-api</a></li>
        <li>stateless sign-in and identity authentication provided by <a href="https://github.com/oauth-xx/oauth-ruby">oauth-ruby</a> and a purpose-specific <a href="https://dev.twitter.com/">twitter dev app</a></li>
        <li><a href="http://jwt.io/">json web tokens</a> for server-client negotiations and authentication</li>
        <p></p>
        <li>coded by Makarand Pande(<a href="https://github.com/makpande/">makpande</a>) with Ricky Panzer @ <a href="http://bloc.io">BLOC</a></li>
        <li>additional assistance & guidance from blogposts by <a href="https://twitter.com/fredguest">Fred Guest</a>, <a href="https://twitter.com/sg_in_sf">Stephen Grider</a>, and <a href="https://twitter.com/tylermcginnis33">Tyler McGinnis</a>.</li>
        <p></p>
          <img className="pharmacy" src="https://i.imgur.com/Xg3ejh7.png" />
      </div>
    );
  }
});

// companion component to View, used as examplar of component-based routing under react-router <Handler />
