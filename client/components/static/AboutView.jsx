var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="about-view">
        <h1>about textual spews</h1>
        <p>a test app integrating stateless rails api with routing react client frontend</p>
      </div>
    );
  }
});

// companion component to View, used as examplar of component-based routing under react-router <Handler />
