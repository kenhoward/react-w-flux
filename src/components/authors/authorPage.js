"use strict";

var React = require('react');
//Creating Link/React-Router for adding new author [Module 8]
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var Authors = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },
  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({ authors: AuthorApi.getAllAuthors() }); //Synchronous call
    }
  },
  render: function() {
    return (
      <div className="container">
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = Authors;
