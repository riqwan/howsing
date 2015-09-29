Howsing.ListingRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('listing', params.id, { reload: true });
  },

  renderTemplate: function() {
    this.render({ outlet: 'listing' });
  },
});
