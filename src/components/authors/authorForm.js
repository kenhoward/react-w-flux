"use strict";

//This will hold the form [Module 8]
var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  PropTypes: {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="container">
        <form>
          <h1>Manage Author</h1>
          <Input
            name="firstName"
            label="First Name"
            value={this.props.author.firstName}
            onChange={this.props.onChange}
            error={this.props.errors.firstName} />

          <Input
            name="lastName"
            label="Last Name"
            value={this.props.author.lastName}
            onChange={this.props.onChange}
            error={this.props.errors.lastName} />

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
        </form>
      </div>
    );
  }
});

module.exports = AuthorForm;

/*
  [Module 8] Just having the form above did not work, with a value="" (empty string).
  I needed to add {this.props.author.firstName and lastName}.
  This won't work until I do a getInitialState in manageAuthorPage

  we'll need a change handler for both inputs (onChange)

  // This was the less modular approach before the changes made up there
  <label htmlFor="firstName">First Name</label>
  <input type="text"
    name="firstName"
    className="form-control"
    placeholder="First Name"
    ref="firstName"
    onChange={this.props.onChange}
    value={this.props.author.firstName} />
  <br />

  <label htmlFor="lastName">Last Name</label>
  <input type="text"
    name="lastName"
    className="form-control"
    placeholder="Last Name"
    ref="lastName"
    onChange={this.props.onChange}
    value={this.props.author.lastName} />
  <br />
  [/Module 8]
*/
