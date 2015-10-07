Howsing.ListingsView = Ember.View.extend({
  didInsertElement: function() {
    return $('.nav-tabs .active').tab('show');
  },
});
