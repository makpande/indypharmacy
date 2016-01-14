var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="post">
        <span className="topic_id">{this.props.topic_id} </span>
        <span className="author">{this.props.author} </span>
        <span className="posttitle">{this.props.title}</span><br/>
        <span className="postbody">{this.props.body}</span><br/>
        <span className="postimage">{this.props.post_image}</span>
      </li>
    );
  }
});
