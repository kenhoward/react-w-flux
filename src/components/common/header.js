"use strict";

var React = require('react');
//Use with links
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div id="headerLogo" className="container-fluid">
          <Link to="app" className="navbar-brand">
            <img src="images/boatbound-logo.png" />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="authors">Authors</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;

//Put <Header /> in main.js

/* With 'Link':
  This is what it looked like before react-router:

  <a href="/#" className="navbar-brand">
    <img src="images/boatbound-logo.png" />
  </a>
  <ul className="nav navbar-nav">
  <li><a href="/#">Home</a></li>
  <li><a href="/#authors">Authors</a></li>
  <li><a href="/#about">About</a></li>

  And with Link:

  <Link to="app" className="navbar-brand">
    <img src="images/boatbound-logo.png" />
  </Link>
  <ul className="nav navbar-nav">
    <li><Link to="app">Home</Link></li>
    <li><Link to="authors">Authors</Link></li>
    <li><Link to="about">About</Link></li>
*/
