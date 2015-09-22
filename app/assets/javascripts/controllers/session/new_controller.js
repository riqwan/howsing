Howsing.SessionNewController = Ember.Controller.extend({
  actions: {
    login: function() {
      var data = this.getProperties('username', 'password');
      var _this = this;
      Ember.$.post('/users', data).then(function(response) {
        _this.set('errorMessage', response.message);
        if (response.success) {
          _this.set('token', response.token);
          console.log(response);
        } else {
          console.log(response);
        }
      });
    },
  },
});
