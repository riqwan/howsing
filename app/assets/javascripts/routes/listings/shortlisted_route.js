Howsing.ListingsShortlistedRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'listings' });
  },
});
