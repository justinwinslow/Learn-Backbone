/*
  BASIC MODULE DEFINITION
*/

define([
  'jquery',
  'underscore',
  'backbone'
],
function($, _, Backbone, submodule) {
  // Create object to store the entire module
  var Module = {};

  // Define module's model
  Module.Model = Backbone.Model.extend({
    initialize: function(){},
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