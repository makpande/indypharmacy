var React = require('react');
var _ = require('underscore');

module.exports = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bios: React.PropTypes.object.isRequired
  },
  render: function() {
    console.log(this.props.bios.data);
    var results = this.props.bios.data.results.map(function(result, index) {
      var items = _.shuffle(result.comics.items.map(function(item, i) {
        return <div className="series" key={i}>{item.name && <li><small>{item.name}</small></li>}</div>;
        }));
      var urls = result.urls.map(function(checker, j) {
        return <div className="series" key={j}>{checker.url && <a target="_blank" href={checker.url}>{checker.type}</a>}</div>;
        });
      return (
        <div className="bios" key={index}>
          <img src={result.thumbnail.path + "/landscape_xlarge." + result.thumbnail.extension} />
          {result.name && <h4>{result.name}</h4>}
          {result.description && <small> {result.description}</small>}
          <h4 className={items.length == 0 ? "hidden" : "showing"}>selected issue appearances:</h4>
          {items}
          <p></p>
          {urls}
          <p></p>
        </div>
      );
    });
    return (
      <div>
        <h6 className={results.length == 0 ? "showing" : "hidden"}>no record found for character as named.  try another name variation.</h6>
        {results}
      </div>
    )
  }
});

// var name = this.props.bios.data ? this.props.bios.data.results[0].name : "";
// console.log(this.props);

//      URLs: {this.props.bios.data.results[0].series.items[0].name}

//  Name: {this.props.bios.data.results[0].name}

// <h3 className={results.length == 0 ? "showing" : "hidden"}>no record found for character as named.  try another name variation.</h3>
