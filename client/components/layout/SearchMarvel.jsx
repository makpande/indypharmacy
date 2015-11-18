var React = require('react');
var Router = require('react-router');
var SpewsView = require('../spews/View.jsx');

module.exports = React.createClass({
  mixins: [Router.Navigation],
  handleMarvelSubmit: function(e){
    e.preventDefault();
    var username = this.refs.username.getDOMNode().value.split(' ').join('%20');
    this.refs.username.getDOMNode().value = '';
    this.transitionTo("spews", {username: username});
  },
  render: function(){
    return (
      <form className="pure-form pure-g" onSubmit={this.handleMarvelSubmit}>
          <div className="pure-u-4-5">
            <input className="pure-input-1" type="text" placeholder="search your marvel character here..." ref="username" />
          </div>
          <div className="pure-u-1-5">
            <button type="submit" className="pure-button pure-input-1 pure-button-primary">search</button>
          </div>
      </form>
    )
  }
});
