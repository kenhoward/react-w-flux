"use strict";

var React = require('react');
//Use with links
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>React with Flux</h1>
          <p>React, React-Router, and Flux for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-primary btn-sm">Learn More</Link>
        </div>
      </div>
    );
  }
});

module.exports = Home;
