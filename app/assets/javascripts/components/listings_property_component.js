Howsing.ListingsPropertyComponent = Ember.Component.extend({
  isEditing: false,

  actions: {
    saveContent: function() {
      this.toggleProperty('isEditing');
      this.sendAction('saveContent');
    },

    editMode: function() {
      this.toggleProperty('isEditing');
    },
  },
});
