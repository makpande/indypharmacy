var React = require('react');
var SearchMarvel = require('./SearchMarvel.jsx');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="splash-container">
        <div className="splash">
            <h11>superhero spew</h11>
            <p></p>
            <SearchMarvel />
            <small className="splash-subhead">search for your favorite marvel comics characters and interact with other fans</small>
            <p></p>
            <small className="splash-subhead">Data provided by Marvel. © 2015 MARVEL</small>
      </div>
    </div>
    )
  }
});
