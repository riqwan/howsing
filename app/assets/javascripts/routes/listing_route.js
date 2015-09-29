Howsing.ListingRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.fetchById('listing', params.id);
  },

  renderTemplate: function() {
    this.render({ outlet: 'listing' });
  },
});
