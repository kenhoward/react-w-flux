"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },
  componentWillMount: function() {
    this.setState({ authors: AuthorApi.getAllAuthors() }); //Synchronous call
  },
  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td>{author.firstName} {author.lastName}</td>
          <td><a href={"/#authors/" + author.id }>{author.id}</a></td>
        </tr>
      );
    };
    return (
      <div className="container">
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>Name</th>
            <th>ID</th>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Authors;
