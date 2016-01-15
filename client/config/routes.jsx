var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var ContactView = require('../components/static/ContactView.jsx');
var TopicsView = require('../components/topics/TopicsView.jsx');
var PostView = require('../components/posts/PostView.jsx');
var PostList = require('../components/posts/PostList.jsx');
var HomeView = require('../components/static/HomeView.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var browserHistory = Router.browserHistory;

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <DefaultRoute path="home" component={HomeView} />
      <Route path="topics" component={TopicsView}>
        <Route path="/topics/:topicId" component={PostView} />
      </Route>
      <Route path="toPost" component={PostList} />
      <Route path="contact" component={ContactView} />
      <Route path="about" component={AboutView} />
    </Route>
  </Router>
  );
