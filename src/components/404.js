"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Link to="app">
          <img src="images/404.jpg" />
        </Link>
      </div>
    );
  }
});

module.exports = NotFoundPage;
