/*
  BASIC MODULE DEFINITION
*/

define([
  'jquery',
  'underscore',
  'backbone',

  'text!user/edit.html',
  'text!user/list.html'
],
function($, _, Backbone, editTemplate, listTemplate) {
  // Create object to store the entire module
  var User = {};

  // Define module's model
  User.Model = Backbone.Model.extend({
    url: function(){
      return '/users/' + this.id;
    },
    initialize: function(options){
      console.log(options);
    }
  });

  User.Collection = Backbone.Collection.extend({
    url: '/users',
    model: User.Model,
    initialize: function(){

    }
  });

  // Create an object for desparate views
  User.views = {};

  // Define module's primary view
  User.views.Edit = Backbone.View.extend({
    tagName: 'form',
    template: _.template(editTemplate),
    initialize: function(){
      // Listen for the model to change and re-render the view html
      this.model.on('change', this.render, this);
    },
    render: function(){
      // Most basic render function, just compile the template and add it to the
      // view's el
      this.$el.html( this.template(this.model.toJSON()) );

      return this;
    },
    doSomething: function(event){
      event.preventDefault();
      console.log('doSomething');
    },
    events: {
      'click button': 'doSomething'
    }
  });

  User.views.List = Backbone.View.extend({
    tagName: 'ul',
    template: _.template(listTemplate),
    initialize: function(){
      // Listen for the model to change and re-render the view html
      this.collection.on('change', this.render, this);
    },
    render: function(){
      // This is one way of handling displaying a collection that has deficiencies
      // There are robust examples on the internets for extending backbone's View to
      // create a collection view
      // If you are using Marionette you get this junk out of the box
      this.$el.empty();

      this.collection.each(function(model){
        this.$el.append( this.template(model.toJSON()) );
      }, this);

      return this;
    },
    events: {}
  });

  return User;
});
