Howsing.EditSepcView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  },
});

Ember.Handlebars.helper('edit-spec', Howsing.EditSepcView);
