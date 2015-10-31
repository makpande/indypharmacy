COMBO
---------------
  A test app integrating stateless Ruby API using the rails-api gem, with a React client side app.

  For stateless, the Rails API does not include action-view, sprockets, or sessions.

  React replaces action-view, Webpack replaces sprockets, and JWT replaces sessions.

  <a href="http://purecss.io/">Pure CSS</a> provides the aesthetics (linked via CDN in `index.html`)

---------------
==first-time setup

* `package.json` and `Gemfile` contains all scripts and dependencies needed to run app

* `webpack.config.js` ties into `webpack.dev.config.js` to prepare `bundle.js` in dev env

* run `npm install` and `bundle install` for first-time setup

---------------
==to run

* run `rails s -b 127.0.0.1` on one terminal tab (must be explicitly bound to this ip address because Twitter will not accept 'localhost' as a callback URL when utilizing our client-based, server session-free, json webtoken-enabled authentication implementation)

* run `npm run devserve` in concurrent terminal tab (for React clientside app)

* access `localhost:8080` for react clientside app, served by stateless runtime Rails backend API.
