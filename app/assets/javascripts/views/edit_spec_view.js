Howsing.EditSepcView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  },
});
