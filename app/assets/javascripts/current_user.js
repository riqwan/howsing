Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container, application) {
    console.log('Initialization started.');
    var store = container.lookup('store:main');
    application.deferReadiness();

    $.ajax({
      url: '/users/logged_in_user',
      success: function(response) {
        if (response.user) {
          var user = store.push('user', response.user);

          container.register('user:current', user, { instantiate: false, singleton: true });

          container.typeInjection('controller', 'currentUser', 'user:current');
          container.typeInjection('route', 'currentUser', 'user:current');
          container.typeInjection('component', 'currentUser', 'user:current');
          console.log('current_user request completed');
          application.advanceReadiness();
        } else {
          console.log('User not logged in');
          application.advanceReadiness();
        }
      },

      failure: function() {
        console.log('A problem occured when fetching current_user');
        application.advanceReadiness();
      },
    });

    console.log('Initialization done.');
  },
});
