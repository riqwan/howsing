Howsing.ListingsRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.currentUser) {
      console.log('logged in, no probs');
    } else {
      this.transitionTo('login');
    }
  },

  model: function() {
    return this.store.findAll('listing', { reload: true });
  },

  renderTemplate: function() {
    this.render({ outlet: 'listings' });
  },
});
