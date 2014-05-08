/*
  BASIC MODULE DEFINITION
*/

define([
  'jquery',
  'underscore',
  'backbone'
],
function($, _, Backbone) {
  // Create object to store the entire module
  var User = {};

  // Define module's model
  User.Model = Backbone.Model.extend({
    url: '/things',
    initialize: function(options){
      console.log(options, this);
    },
    events: {}
  });

  // Create an object for desparate views
  User.view = {};

  // Define module's primary view
  User.view.Main = Backbone.View.extend({
    initialize: function(){},
    events: {}
  });

  return Module;
});