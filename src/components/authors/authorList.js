"use strict";

var React = require('react');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
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
        <table className="table">
          <thead>
            <th>Name</th>
            <th>ID</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;
