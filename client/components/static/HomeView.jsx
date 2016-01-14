var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="home-view">
        <h3>Welcome to my Pharmacy Blog</h3>
        <p>Please login to explore Indy Pharmacy Blog App</p>
        <p></p>
        <img className="Pharmacy" src="https://flufflepotdotcom.files.wordpress.com/2011/12/brittany.png" alt="Pharmacy"/>
      </div>
    );
  }
});

// <ul className="pure-menu-horizontal pure-menu-item">
//   <li className="pure-menu-item"><a href="http://www.livingroompharmacy.ca/assets/images/contentImages/compounding_natural_mortar_content.jpg" className="pure-menu-link">Pharmacy</a></li>
//   <li className="pure-menu-item"><a href="#" className="pure-menu-link">Vitamins</a></li>
//   <li className="pure-menu-item"><a href="#" className="pure-menu-link">Refills</a></li>
//   <li className="pure-menu-item"><a href="#"className="pure-menu-link">Eye Care</a></li>
// </ul>
