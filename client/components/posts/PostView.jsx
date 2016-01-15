var React = require('react');
var PostsList = require('./PostList.jsx');
var PostsForm = require('./PostForm.jsx');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      topicId: {}
    };
  },

  componentDidMount: function() {
    this.readPostFromAPI();
  },

  readPostFromAPI: function() {
    console.log("reading from api");
    this.props.readFromAPI(this.props.origin + '/topics/' + 3 + '/posts', function(posts) {
      console.log(posts);
      this.setState({data: posts});
    }.bind(this));
  },
  writePostToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/topics/' + 3 + '/posts', data, function(posts) {
      var posts = this.state.data;
      posts.unshift(posts);
      this.setState({data: posts});
    }.bind(this));
  },


  handleSubmit: function(e) {
    e.preventDefault();
    var body = this.refs.body.getDOMNode().value.trim();
    if (!body) {return;}
    if (this.props.signedIn) {
      this.props.writePostToAPI(JSON.stringify({comment: {body: body}}));
      this.refs.body.getDOMNode().value = '';
      this.refs.body.getDOMNode().blur();
    } else {
      alert('Please sign in to post!');
    }
    },

// <PostsForm writePostToAPI={this.writePostToAPI} signedIn={this.props.signedIn} />
  render: function() {

    return (
      <div className="postview">
        <h1>Posts</h1>
        {this.renderPosts()}
        {this.props.signedIn}
      </div>
    )
  },

  renderPosts: function() {
    return this.state.data.slice(0, 10).map(function(post){
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
          <div>
            <fieldset className="pure-group">
              <form className="comment-form pure-form" onSubmit={this.handleSubmit}>
                <textarea type="text" placeholder="comment " ref="title" />
              </form><br/>
              <button type="submit" className="pure-button pure-button-primary">Post</button>
            </fieldset>
          </div>
        </ul>
      )
    });
  }
});
