require('./assets/app.css');
require('./assets/menu.css');
require('./assets/spews.css');
require('./assets/home.css');

import React from 'react'
import {browserHistory, Router, Route, Link, DefaultRoute} from 'react-router'
import ReactDOM from 'react-dom'

import routes from './config/routes.jsx'
import App from './components/layout/App.jsx'
import AboutView from './components/static/AboutView.jsx'
import HomeView from './components/static/HomeView.jsx'
import ContactView from './components/static/ContactView.jsx'
import TopicsView from './components/topics/TopicsView.jsx'
import PostView from './components/posts/PostView.jsx'

// var React = require('react');
// var Router = require('react-router');
// var routes = require('./config/routes.jsx');
//
// Router.run(routes, Router.HashLocation, function(Handler) {
//   React.render(<Handler />, document.body);
// });


ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={HomeView} />
        <Route path="topics" component={TopicsView}>
          <Route path="/topics/:topicId" component={PostView} />
          </Route>
         <Route path="contact" component={ContactView} />
         <Route path="about" component={AboutView} />
      </Route>
    </Router>

), document.getElementById('app'))

// # main React app entry for webpack purposes, lists primary <Handler /> react-router functionality
// changed Router.HashLocation from Router.HistoryLocation to allow for browser refresh
