var React = require('react');
var PostsList = require('./PostList.jsx');
var PostsForm = require('./PostForm.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.readPostFromAPI();

  },

  readPostFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/topics/' + 2 + '/posts', function(posts) {
      this.setState({data: posts});
    }.bind(this));
  },
  writePostToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/topics/'+ 2 + '/posts', data, function(posts) {
      var posts = this.state.data;
      posts.unshift(posts);
      this.setState({data: posts});
    }.bind(this));
  },
// <PostsForm writePostToAPI={this.writePostToAPI} signedIn={this.props.signedIn} />
  render: function() {

    return (
      <div className="postview">
        <h1>Posts</h1>
        {this.renderPosts()}

      </div>
    );
  },

  renderPosts: function() {
    return this.state.data.map(function(post){
      return (
        <ul>
          <div className="post_title">
                <h4>{post.title}</h4>                
                <span className="posttopicId"> {post.topic_id}</span>
          </div>
          <div>
            <span className="postimage"><img src={post.post_image}></img></span><br/>
            <span className="postbody"> {post.body} </span>
          </div>
        </ul>

      )

    });
  }
});
