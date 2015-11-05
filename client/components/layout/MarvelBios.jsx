var React = require('react');

module.exports = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bios: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div>
        Name: {this.props.bios.data.results[0].name}
        <br></br>
        URLs: {this.props.bios.data.results[0].series.items.name}
      </div>
    )
  }
});


// var name = this.props.bios.data ? this.props.bios.data.results[0].name : "";
// console.log(this.props);
