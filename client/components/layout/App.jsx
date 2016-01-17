var React = require('react');
var Reqwest = require('reqwest');
var SpewsView = require('../spews/View.jsx');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Uri = require('jsuri');


module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState: function() {
    return {showMenu: false, signedIn: false, currentUser: {handle: ''}};
  },
  componentWillMount: function() {
    var jwt = new Uri(location.search).getQueryParamValue('jwt')
    if (!!jwt) {sessionStorage.setItem('jwt', jwt);}
  },

  // Uri ('jsuri') dependency parses URL for JWT value, then extracts it and sets in session storage (not localstorage, app memory or cookie)

  componentDidMount: function() {
    if (!!sessionStorage.getItem('jwt')) {this.currentUserFromAPI();}
  },
  currentUserFromAPI: function() {
    this.readFromAPI(this.props.origin + '/current_user', function(user) {
      this.setState({signedIn: true, currentUser: user});
    }.bind(this));
  },

  // DidMount checks sessionStorage for jwt, then calls currentUserFromAPI to assign object from jwt from parsed-URL to currentUser state

  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }      
    });
  },

  // Reqwest is npm dependency used to parse json api via parameter arguments

  writeToAPI: function(method, url, data, successFunction) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error)  {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  handleMenuClick: function() {
    this.setState({showMenu: !this.state.showMenu});
  },
  render: function() {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';
    return (
      <div id="app" className={menu}>
        <Menu origin={this.props.origin} sendMenuClick={this.handleMenuClick} signedIn={this.state.signedIn} />
        {this.props.children}
      </div>
    );
  }
});

// # renders both Menu component and RouteHandler (which manages View and About as listed in routes.jsx)


// App.jsx = primary root component of React app - main stateholder
