Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container, application) {
    console.log('Initialization started.');
    var store = container.lookup('store:main');
    application.deferReadiness();

    $.ajax({
      url: '/users/user_logged_in',
      success: function(response) {
        if (response.user) {
          var user = store.push('user', response.user);
          container.register('user:current', user, { instantiate: false, singleton: true });

          container.typeInjection('controller', 'currentUser', 'user:current');
          container.typeInjection('route', 'currentUser', 'user:current');
          application.advanceReadiness();
        } else {
          application.advanceReadiness();
        }
      },

      failure: function() {
        console.log('current_user not fetched');
        application.advanceReadiness();
      },
    });
  },
});
