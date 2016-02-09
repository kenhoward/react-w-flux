"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div id="headerLogo" className="container-fluid">
          <a href="/#home" className="navbar-brand">
            <img src="images/boatbound-logo.png" />
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;

// put <Header /> in main.js
