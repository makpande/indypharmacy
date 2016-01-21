var React = require('react');
var Router = require('react-router');
var App = require('../layout/App.jsx');
var Api = require('../utils/api.jsx');
var Link = Router.Link;

module.exports = React.createClass({

  getInitialState: function() {
    return {data: []};
  },


  componentDidMount: function() {
    console.log("here in topics view");
    this.readTopicFromAPI();
  },

  readTopicFromAPI: function() {
    Api.readFromAPI(this.props.origin + '/topics', function(topics) {
      this.setState({data: topics});
    }.bind(this));
  },


  writeTopicToAPI: function(data) {
    Api.writeToAPI('topic', this.props.origin + '/topics', data, function(topics) {
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
    return this.state.data.slice(0, 5).map(function(topic){
      return (
        <ul>
          <p> hello world</p>
          <div className="topic_title">
              <Link to={`/topics/${topic.id}`}>
                <h4>{topic.title}</h4>
              </Link>
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
