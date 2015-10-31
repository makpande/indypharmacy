var React = require('react');
var SpewsList = require('./List.jsx');
var SpewsForm = require('./Form.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readSpewsFromAPI();
  },
  readSpewsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/spews', function(spews) {
      this.setState({data: spews});
    }.bind(this));
  },
  writeSpewToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/spews', data, function(spew) {
      var spews = this.state.data;
      spews.shift();
      spews.unshift(spew);
      this.setState({data: spews});
    }.bind(this));
  },
  optimisticUpdate: function(spew) {
    var spews = this.state.data;
    spews.unshift(spew);
    this.setState({data: spews});
  },

  // optimisticUpdate brings superfast spew updating (rendered before server side validations on assumptions of validity)
  // add the spew.shift() method to remove the first element in the array of spew data, which will be the optimistic update
  // then optimisticUpdate method takes a spew as an arg, prepends it to existing array and resets data's state.
  render: function() {
    return (
      <div className="spews-view">
        <h1>#textualspew</h1>
        <SpewsForm writeSpewToAPI={this.writeSpewToAPI} optimisticUpdate={this.optimisticUpdate} currentUser={this.props.currentUser} signedIn={this.props.signedIn} />
        <SpewsList data={this.state.data} />
      </div>
    );
  }
});
