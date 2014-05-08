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
    text: 'bower_components/text/text'
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
  },
  packages: [
    {
      name: 'user',
      location: 'modules/user',
      main: 'user'
    }
  ]
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
    // Create a collection of users
    var myUsers = new User.Collection(users);

    // Find the current user in the collection
    var myUser = myUsers.findWhere({id: currentUserId});

    // Create views
    var userEditView = new User.views.Edit({model: myUser});
    var userListView = new User.views.List({collection: myUsers});

    // Render views and add them to the DOM
    userEditView.render();
    $('body').append(userEditView.$el);
    userListView.render();
    $('body').append(userListView.$el);

    // Change some data to show how the views update
    setTimeout(function(){
      myUser.set('name', 'Poop');
    }, 5000);

    console.log(myUser, myUsers);
  }
);