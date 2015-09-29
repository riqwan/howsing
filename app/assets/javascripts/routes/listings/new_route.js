Howsing.ListingsNewRoute = Ember.Route.extend({
  beforeModel: function() {
    if (!this.currentUser.get('isLandlord')) {
      this.transitionTo('listings');
    }
  },
});
