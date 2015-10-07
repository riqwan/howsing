Howsing.ListingsPropertyComponent = Ember.Component.extend({
  isEditing: false,

  actions: {
    saveContent: function() {
      this.toggleProperty('isEditing');
      this.sendAction('saveContent');
    },

    editMode: function() {
      var _this = this;
      this.toggleProperty('isEditing');

      if (this.get('isEditing') === true) {
        Ember.run.schedule('afterRender', this, function() {
          this.$('input').focus();
        });
      }
    },
  },
});
