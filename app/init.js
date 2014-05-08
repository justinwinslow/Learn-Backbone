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
    user: 'modules/user'
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
    'user'
  ],
  function ($, _, Backbone, User) {
    var myApp = {};

    var myUsers = new User.Collection(users);

    var myUser = myUsers.findWhere({id: 0});

    var userEditView = new User.view.Edit({model: myUser});
    var userListView = new User.view.List({collection: myUsers});

    userEditView.render();
    $('body').append(userEditView.$el);
    userListView.render();
    $('body').append(userListView.$el);

    setTimeout(function(){
      myUser.set('name', 'Poop');
    }, 5000);

    console.log(myUser, myUsers);
  }
);