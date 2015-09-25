Howsing.ListingsNewRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.currentUser.get('isLandlord')) {
      this.transitionTo('listings');
    }
  },

  renderTemplate: function() {
    this.render({ outlet: 'listing' });
  },
});
