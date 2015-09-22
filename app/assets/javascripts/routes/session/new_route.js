Howsing.SessionNewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'listing' });
  },
});
