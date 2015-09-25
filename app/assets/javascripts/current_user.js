Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container, application) {
    var store = container.lookup('store:main');
    application.deferReadiness();

    $.ajax({
      url: '/users/user_logged_in',
      success: function(response) {
        if (response.user) {
          var user = store.push('user', response.user);
          var user = store.push('user', store.serializerFor('user').store.normalize('user', response.user));

          container.register('user:current', user, { instantiate: false, singleton: true });

          container.typeInjection('controller', 'currentUser', 'user:current');
          container.typeInjection('route', 'currentUser', 'user:current');

          console.log('current_user is ready');
          application.advanceReadiness();
        } else {
          console.log('user response is empty');
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
