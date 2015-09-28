Howsing.ListingsRoute = Ember.Route.extend({
  beforeModel: function() {
    if (this.currentUser) {
      console.log('logged in, no probs');
    } else {
      this.transitionTo('login.new');
    }
  },

  model: function() {
    return this.store.find('listing');
  },

  renderTemplate: function() {
    this.render({ outlet: 'listings' });
  },
});
