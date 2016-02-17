"use strict";

//Beginning of forms [Module 8]
var React = require('react');
//Enable React Router for post save (Author) transition [Module 8]
var Router = require('react-router');
var AuthorForm = require('./authorForm');
//Allows us to save to list of the Authors in the authorApi [Module 8]
var AuthorApi = require('../../api/authorApi');
//Referencing the toastr lib
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  //Throw in a Mixin to help show the routing navigation [Module 8]
  mixins: [
    Router.Navigation
  ],
  //Used to confirm if you wish to leave page with content in the input field [Module 8]
  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {}, //For validation [Module 8]
      dirty: false //Coorelates with willTransitionFrom [Module 8]
    };
  },
  componentWillMount: function() {
    var authorId = this.props.params.id; //From the path '/author:id'

    //Won't always exist so you need to test
    if( authorId) {
      this.setState({ author: AuthorApi.getAuthorById(authorId)});
    }
  },
  setAuthorState: function() {
    //Related to dirty from willTransitionFrom [Module 8]
    this.setState({ dirty: true });
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },
  authorFormIsValid: function() {
    var isValid = true;
    this.state.errors = {}; //Clear any previous errors [Module 8]

    if (this.state.author.firstName.length < 2) {
      this.state.errors.firstName = 'First name must be at least 2 characters.';
      isValid = false;
    }

    if (this.state.author.lastName.length < 2) {
      this.state.errors.lastName = 'Last name must be at least 2 characters.';
      isValid = false;
    }

    this.setState({ errors: this.state.errors });
    return isValid;
  },
  saveAuthor: function(event) {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }

    AuthorApi.saveAuthor(this.state.author);
    //Once dirty has been checked from willTransitionFrom function: [Moudle 8]
    this.setState({ dirty: false });
    //Enabling toastr to notify user of a successful save [Module 8]
    toastr.success('Author Saved!');
    //This is how we transition to another location once this fn has been invoked [Module 8]
    this.transitionTo('authors'); //Goes back to the authors page
  },

  render: function() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState} //Taking out to test PropTypes in authorForm will give us an error msg [Module 8]
        onSave={this.saveAuthor}
        errors={this.state.errors} />
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

  I'm going to create a saveAuthor function to allow me to save the author
  [/Module 8]
*/
