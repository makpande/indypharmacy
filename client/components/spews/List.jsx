var React = require('react');
var Spew = require('./Spew.jsx');

module.exports = React.createClass({
  render: function() {
    var spews = this.props.data.map(function(spew) {
      return (
        <Spew key={spew.id} content={spew.content} author={spew.user.handle} />
      );
    });

    return (
      <ul className="spews-list">
        {spews}
      </ul>
    );
  }
});
