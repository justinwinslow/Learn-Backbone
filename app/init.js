/*
  APP CONFIG & INIT
*/

// Require config
require.config({
  paths: {
    // Libraries
    jquery: 'bower_components/jquery/dist/jquery',
    //underscore: 'bower_components/underscore', I left this as a comment so you can see how aliasing paths can make "upgrades" easier
    underscore: 'bower_components/lodash/dist/lodash',
    backbone: 'bower_components/backbone/backbone',
    handlebars: 'bower_components/handlebars/handlebars',
    modernizr: 'bower_components/modernizr/modernizr',
    text: 'bower_components/text/text',
    css: 'bower_components/css/css',
    // Modules
    somemodule: 'modules/module'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    modernizr: {
      exports: 'Modernizr'
    }
  }
});

// Start app
require(
  [
    'jquery',
    'underscore',
    'backbone',
    'somemodule'
  ],
  function ($, _, Backbone, Module) {
    var myApp = {};

    myApp.myModule = new Module.view.Main({name: 'My New Module'});
    console.log(myApp.myModule);
  }
);