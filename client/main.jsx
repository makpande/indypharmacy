require('./assets/app.css');
require('./assets/menu.css');
require('./assets/spews.css');
require('./assets/home.css');

import React from 'react'
import {browserHistory, Router, Route, Link} from 'react-router'
import { render } from 'react-dom'

// import routes from './config/routes.jsx'
import App from './components/layout/App.jsx'
import AboutView from './components/static/AboutView.jsx'

// Router.run(routes, Router.HashLocation, function(Handler) {
//   React.render(<Handler />, document.body);
// });

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
       <Route path="about" component={AboutView} />
    </Route>
  </Router>

), document.getElementById('app'))

// # main React app entry for webpack purposes, lists primary <Handler /> react-router functionality
// changed Router.HashLocation from Router.HistoryLocation to allow for browser refresh
