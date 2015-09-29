Howsing.PropertySpecComponent = Ember.Component.extend({
  isEditing: false,

  actions: {
    saveContent: function() {
      this.toggleProperty('isEditing');

      this.sendAction('saveContent');
    },
  },

  click: function() {
    this.toggleProperty('isEditing');
  },
});
