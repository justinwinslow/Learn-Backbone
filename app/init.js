/*
  APP CONFIG & INIT
*/

// Set debug mode [think about modifying this to be dynamic]
window.debug = true;

if (debug) console.log('init');

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
    'handlebars',
    'somemodule'
  ],
  function ($, _, Backbone, Handlebars, somemodule) {
    if (debug) console.log($);
    if (debug) console.log(_);
    if (debug) console.log(Backbone);
    if (debug) console.log(Handlebars);
    if (debug) console.log(somemodule);

    window.myApp = window.myApp = {};

    myApp.myModule = new somemodule.view.main({name: 'My New Module'});
    myApp.myModule.trigger('myEvent', {event: 'myEvent'});
  }
);