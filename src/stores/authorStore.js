"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AuthorStore = assign({}, EventEmitter.prototype, {
  /*
  //Add Change Listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  //Remove Change Listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  //Emit Change Listener
  emitChange: function() {
    this.emit('change');
  }
  */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  //Remove Change Listener
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  //Emit Change Listener
  emitChange: function() {
    this.emit(CHANGE_EVENT);
});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    
  }
});

module.exports = AuthorStore;
