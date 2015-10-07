Howsing.ListingsPropertyComponent = Ember.Component.extend({
  isEditing: false,
  listingOwner: Ember.computed.alias('listing.user.email'),

  actions: {
    saveContent: function() {
      this.toggleProperty('isEditing');
      this.sendAction('saveContent');
    },

    editMode: function() {
      if (this.get('listingOwner') === this.currentUser.get('email')) {
        var _this = this;
        this.toggleProperty('isEditing');

        if (this.get('isEditing') === true) {
          Ember.run.schedule('afterRender', this, function() {
            this.$('input').focus();
          });
        }
      }
    },
  },
});
