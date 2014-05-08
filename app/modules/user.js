/*
  BASIC MODULE DEFINITION
*/

define([
  'jquery',
  'underscore',
  'backbone',

  'text!./user.html',
  'text!modules/users.html'
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
  User.view = {};

  // Define module's primary view
  User.view.Edit = Backbone.View.extend({
    tagName: 'form',
    template: _.template(editTemplate),
    initialize: function(){
      this.model.on('change', this.render, this);
    },
    render: function(){
      this.$el.html( this.template(this.model.toJSON()) );

      return this;
    },
    saveMe: function(event){
      event.preventDefault();

      console.log('save me');

    },
    events: {
      'click button': 'saveMe'
    }
  });

  User.view.List = Backbone.View.extend({
    tagName: 'ul',
    template: _.template(listTemplate),
    initialize: function(){
      this.collection.on('change', this.render, this);

      Backbone.on('saveMe', function(){
        console.log('List view heard save', arguments);
      });
    },
    render: function(){
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
