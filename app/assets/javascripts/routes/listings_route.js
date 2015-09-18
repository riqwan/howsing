Howsing.ListingsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('listing');
  },

  renderTemplate: function() {
    this.render({ outlet: 'listings' });
  },
});
