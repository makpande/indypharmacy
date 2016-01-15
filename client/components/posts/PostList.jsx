var React = require('react');
var Post = require('./Post.jsx');

module.exports = React.createClass({
  render: function() {
    var posts = this.props.data.map(function(post) {
      return (
        <Post key={post.id} title={post.title} body={post.body} post_image={post.post_image} topic_id={post.topic_id} author={post.user.author} />
      );
    });

    return (
      <ul className="postlist">
        {posts}
      </ul>
    );
  }
});
