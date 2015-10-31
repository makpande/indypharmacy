var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="spew">
        <span className="spew-author">{this.props.author}: </span>
        <span className="spew-text">{this.props.content}</span>
      </li>
    );
  }
});
