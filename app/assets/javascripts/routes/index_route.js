Howsing.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('listings');
  },
});
