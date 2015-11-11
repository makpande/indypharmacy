var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },
  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span onClick={this.handleSignOutLink}>logout</span></li>;
    } else{
      var signingLink = <li><a href={this.props.origin + '/request_token'}>login</a></li>;
    }
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading"></span>
            <ul>
              <li><Link to="search">search</Link></li>

              <li><Link to="about">about</Link></li>
              {signingLink}
            </ul>
            <p></p>
            <p></p>
            <div className="rollover"> <a href="http://www.marvel.com/comics"></a> </div>
            <div className="rolloverlogo"> <a href="https://github.com/dpg5000"></a> </div>
        </div>
        </div>
      </div>
    );
  }
});

// <a href="http://www.marvel.com/comics"><img src="http://i.imgur.com/1iLZmSd.png" onmouseover="this.src='http://i.imgur.com/r92Kdlu.png'" onmouseout="this.src='http://i.imgur.com/1iLZmSd.png'" /></a>
