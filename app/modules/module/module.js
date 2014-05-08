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
  var Module = {};

  // Define module's model
  Module.Model = Backbone.Model.extend({
    url: '/things',
    initialize: function(options){
      console.log(options, this);
    },
    events: {}
  });

  // Create an object for desparate views
  Module.view = {};

  // Define module's primary view
  Module.view.Main = Backbone.View.extend({
    initialize: function(){},
    events: {}
  });

  return Module;
});