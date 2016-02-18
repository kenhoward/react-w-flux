"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  //Our Action creator [Module 10]
  creatAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    //Dispatcher, go tell all the stores that an author was just created
    Dispatcher.dispatch({
      //Actual Action [Module 10]
      //Action Type
      actionType: ActionTypes.CREATE_AUTHOR,
      //Action Data
      author: newAuthor
    });
  }
};

module.exports = AuthorActions;
