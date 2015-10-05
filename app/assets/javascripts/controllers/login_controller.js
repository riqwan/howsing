Howsing.LoginController = Ember.Controller.extend({
  actions: {
    login: function() {
      var data = this.getProperties('username', 'password');
      var _this = this;

      return Ember.$.ajax({
        url: '/users/login',
        type: 'POST',
        data: data,
        success: function(response) {
          var user = _this.store.push('user', response.user);

          window.location = '';
        },

        error: function(response) {
          alert(response.body);
        },
      });
    },
  },
});
