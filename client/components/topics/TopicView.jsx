var React = require('react');
var TopicsList = require('./TopicList.jsx');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readTopicFromAPI();
  },
  readTopicFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/topics', function(topics) {
      this.setState({data: topics});
    }.bind(this));

  },

  writeTopicToAPI: function(data) {
    this.props.writeToAPI('topic', this.props.origin + '/topics', data, function(topics) {
      var topics = this.state.data;
      topics.unshift(topics);
      this.setState({data: topics});
    }.bind(this));
  },

  render: function() {
    return (
      <div className="topicview">
        <h1>Topics</h1>
       {this.renderTopics()}
      </div>
    )
  },

  renderTopics: function() {
    return this.state.data.map(function(topic){
      return (
        <ul>
          <div className="topic_title">
              <Link to="topictitle">
                <h4>{topic.title}</h4></Link>
          </div>
          <div>
            <span className="topicId"> {topic.id} </span>
            <span className="topicimage"><img src={topic.topic_image}></img></span><br/>
            <span className="topicbody"> {topic.body} </span>
          </div>
        </ul>

      )

    });
  }

  });

// <div onClick={this.props.onClick}>{this.props.topic.id}</div>
