var React = require('react');

module.exports = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bios: React.PropTypes.object.isRequired
  },
  render: function() {
    var results = this.props.bios.data.results.map(function(result, index) {
      var items = result.series.items.map(function(item, i) {
        return <div className="series" key={i}>
          {item.name && <li>{item.name}</li>}
        </div>;
      });
      return (
        <div className="bios" key={index}>
          <img src={result.thumbnail.path + "/landscape_xlarge." + result.thumbnail.extension} />
          {result.name && <p>{result.name}</p>}
          {result.description && <small> {result.description}</small>}
          {items}
          <p></p>
        </div>
      );
    });
    return (
      <div>
        {results}
      </div>
    )
  }
});

// var name = this.props.bios.data ? this.props.bios.data.results[0].name : "";
// console.log(this.props);

//      URLs: {this.props.bios.data.results[0].series.items[0].name}

//  Name: {this.props.bios.data.results[0].name}
