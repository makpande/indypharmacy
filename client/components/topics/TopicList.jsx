var React = require('react');
var Router = require('react-router');
var Topic = require('./Topic.jsx');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {

    var topics = this.props.data.map(function(topic) {
      return (
        <Topic title={topic.title} key={topic.id} topic_image={topic.topic_image}  body={topic.body} />
      );

    });

    return (
      <div>
      <ul className="topiclist">        
        {topics}
      </ul>
    </div>
    );
  }
});
