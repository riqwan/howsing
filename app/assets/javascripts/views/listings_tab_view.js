Howsing.ListingsTabView = Ember.View.extend({
  templateName: 'listings_tab',

  didInsertElement: function() {
    return $('.nav-tabs .active').tab('show');
  },
});
