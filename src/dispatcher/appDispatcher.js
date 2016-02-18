//Singleton, only one dispatcher per App
//Everything will be dispatched through this dispatcher
var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();
