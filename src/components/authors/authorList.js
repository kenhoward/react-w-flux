"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td>{author.firstName} {author.lastName}</td>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
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

/*
  Changing the <td> from:
    <td><a href={"/#authors/" + author.id }>{author.id}</a></td>
  To this:
    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
*/
