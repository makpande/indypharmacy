require('./assets/app.css');
require('./assets/menu.css');
require('./assets/spews.css');
require('./assets/home.css');

var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes.jsx');

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler />, document.body);
});


// # main React app entry for webpack purposes, lists primary <Handler /> react-router functionality
// changed Router.HashLocation from Router.HistoryLocation to allow for browser refresh
