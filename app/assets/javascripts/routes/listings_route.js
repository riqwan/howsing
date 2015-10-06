Howsing.ListingsRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.currentUser) {
      this.transitionTo('login');
    }
  },

  model: function() {
    return this.store.findAll('listing', { reload: true });
  },
});
