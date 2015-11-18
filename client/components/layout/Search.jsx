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
            <p className="splash-subhead">
              search for your favorite marvel comics characters and interact with other fans
            <br/>
              log in via your twitter account and get in on the action
            <br/>
              <img src="http://www.microsoft.com/en-us/outlook-com/img/footer-icon-twitter-5919eab442.svg"></img>
          </p>
      </div>
    </div>
    )
  }
});
