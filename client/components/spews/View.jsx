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

    helpers.getMarvelInfo(this.getParams().username)
      .then(function (dataObj) {
        console.log(dataObj);

        var firstResult = dataObj.bios.data.results[0]

        this.setState({
          bios: dataObj.bios,
          characterId: firstResult ? firstResult.id : null
        });
        this.readSpewsFromAPI();
      }.bind(this));
  },
  readSpewsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/spews?character_id='+this.state.characterId, function(spews) {
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
    console.log(bios);

    var marvelBios = function(){
      if (!bios.data){
        return (
            <div><img src="https://i.imgur.com/Acss22h.gif"></img></div>
        );
      }
      else if (bios.data && bios.data.results.length == 0){
        return (
            <div>
              <p>
                No Records Found.
              </p>
            </div>
        );
      }
      else if (bios.data){
        return (
          <MarvelBios username={username} bios={bios} />
        );
      }
    };


    return (
      <div className="spews-view">
        <div className="pure-g">
          <div className="pure-u-5-8">
            <h1 className="namebox">{username}</h1>
            {marvelBios()}
          </div>
          <div className="pure-u-3-8">
            <h1>#textualspew</h1>
            <SpewsForm writeSpewToAPI={this.writeSpewToAPI}
              optimisticUpdate={this.optimisticUpdate} currentUser={this.props.currentUser}
              signedIn={this.props.signedIn} characterId={this.state.characterId} />
            <SpewsList data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
});


// {marvelBios()}
