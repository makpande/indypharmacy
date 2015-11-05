var React = require('react');
var Router = require('react-router');
var SpewsList = require('./List.jsx');
var SpewsForm = require('./Form.jsx');
var MarvelBios = require('../layout/MarvelBios.jsx');
var helpers = require('../utils/helpers.jsx');

module.exports = React.createClass({
  mixins: [Router.State],
  getInitialState: function() {
    return {
      data: [],
      bios: {}
    }
  },
  componentDidMount: function() {
    this.readSpewsFromAPI();
    console.log("ehllo wrold");

    helpers.getMarvelInfo(this.getParams().username)
      .then(function (dataObj) {
        console.log(dataObj);
        this.setState({
          bios: dataObj.bios
        });
      }.bind(this));
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
    var username = this.getParams().username;

    var bios = this.state.bios;

    var marvelBios = function(){
      if (bios.data){
        console.log("bios exists");
        console.log(bios);
        return (
          <MarvelBios username={username} bios={bios} />
        );
      }else{
        console.log("no bios");
        return (
          <div>no such character exists in Marvel database</div>
        );
      }
    };


    return (
      <div className="spews-view">
        <div className="pure-g">
          <div className="pure-u-1-3">
            <h1>{username}</h1>
            {marvelBios()}
          </div>
          <div className="pure-u-1-3"></div>
          <div className="pure-u-1-3">
            <h1>#textualspew</h1>
            <SpewsForm writeSpewToAPI={this.writeSpewToAPI} optimisticUpdate={this.optimisticUpdate} currentUser={this.props.currentUser} signedIn={this.props.signedIn} />
            <SpewsList data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
});
