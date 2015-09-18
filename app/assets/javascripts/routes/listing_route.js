Howsing.ListingRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('listing', params.id);
  },

  renderTemplate: function() {
    this.render({ outlet: 'listing' });
  },
});
