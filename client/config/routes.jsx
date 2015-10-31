var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var Search = require('../components/layout/Search.jsx');
var SpewsView = require('../components/spews/View.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="search" handler={Search} />
    <Route name="spews" handler={SpewsView} />
    <Route name="about" handler={AboutView} />
  </Route>
);
