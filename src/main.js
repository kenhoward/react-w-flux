//$ = jQuery = require('jquery'); //Referencing jQuery by 'jQuery' or $ //Used here b4 react-router --> moved to app.js
"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//Runs the router
Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});

/*

NOTE:
  //Hash Location Enabled:
  Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
  });

  //History Location Enabled (HTML5 History API, Push, replace, and pop states):
  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
  });

*/

/* ALL USED BEFORE REACT-ROUTER

var Home = require('./components/homePage');
//Adding in Authors Page
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
// var Header = require('./components/common/header'); //Used for regular routing

(function(win) {
"use strict";

//Used for regular routing
// var App = React.createClass({
//   render: function() {
//     var Child; //Which child we want to render
//
//     switch(this.props.route) {
//       case 'about': Child = About; break;
//       case 'authors': Child = Authors; break;
//       default: Child = Home;
//     }
//     return (
//       <div>
//         <Header />
//         <Child />
//       </div>
//     );
//   }
// });

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

*/
