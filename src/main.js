$ = jQuery = require('jquery'); //Referencing jQuery by 'jQuery' or $
var React = require('react');
var Home = require('./components/homePage');
//Adding in Authors Page
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win) {
"use strict";
var App = React.createClass({
  render: function() {
    var Child; //Which child we want to render

    switch(this.props.route) {
      case 'about': Child = About; break;
      case 'authors': Child = Authors; break;
      default: Child = Home;
    }
    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
});

function render() {
  var route = win.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById('app'));
}

win.addEventListener('hashchange', render);
render();
})(window);
// React.render(<Home />, document.getElementById('app')); //Used before routing, just hard coding Home

// var App = console.log('Hello world from Browserify');
// module.exports = App;
