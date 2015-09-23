Howsing.SessionDestroyRoute = Ember.Route.extend({
  beforeModel: function() {
    return Ember.$.ajax({
      url: '/users/logout',
      type: 'DELETE',
      success: function(response) {
        window.location = '';
      },

      error: function(response) {
        alert(response.body);
      },
    });
  },
});
