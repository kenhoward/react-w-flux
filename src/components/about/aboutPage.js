"use strict";

var React = require('react');

var About = React.createClass({
  //For handling transitions - react-router - Nice for forms
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm("You are heading to a boring page, do you acknowledge this?")) {
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component) {
      if(!confirm("Do you wish to navigate away from this page?")) {
        transition.about();
      }
    }
  },
  render: function() {
    return (
      <div className="container">
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
