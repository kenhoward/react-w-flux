"use strict";

//Beginning of forms [Module 8]
var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: '' }
    };
  },
  setAuthorState: function() {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },
  render: function() {
    return (
      <AuthorForm
        author="{this.state.author}"
        onChange={this.setAuthorState} />
    );
  }
});

module.exports = ManageAuthorPage;

/*
  [Module 8]In order for my form to work (in authorForm), I needed to do this getInitialState
  I also, needed to update the <AuthorForm /> to reflect the this.state.author
  (please see changes made in authorForm)

  Then I need to do the setAuthorState function to save the new data. This will
  be called for every key pressed

  Then I'll need to add onChange to pass into the AuthorForm
  [/Module 8]
*/
