var React = require('react');
var SearchMarvel = require('./SearchMarvel.jsx');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="splash">
            <h1>#superherospew</h1>
            <SearchMarvel />
      </div>
    )
  }
});
