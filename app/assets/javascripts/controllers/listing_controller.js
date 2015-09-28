Howsing.ListingController = Ember.ObjectController.extend({
  actions: {
    editPropertyType: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isPropertyTypeEditing', true);
      }
    },

    editArea: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isAreaEditing', true);
      }
    },

    editBuildUpArea: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isBuildUpAreaEditing', true);
      }
    },

    editBedrooms: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isBedroomsEditing', true);
      }
    },

    editBathrooms: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isBathroomsEditing', true);
      }
    },

    editBalconies: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isBalconiesEditing', true);
      }
    },

    editPrice: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isPriceEditing', true);
      }
    },

    editDeposit: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isDepositEditing', true);
      }
    },

    editFurnishingState: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        this.set('isFurnishingStateEditing', true);
      }
    },

    saveContent: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        var listing = this.get('model');
      }

      listing.save();

      this.set('isPropertyTypeEditing', false);
      this.set('isPropertyTypeEditing', false);
      this.set('isAreaEditing', false);
      this.set('isBuildUpAreaEditing', false);
      this.set('isBedroomsEditing', false);
      this.set('isBathroomsEditing', false);
      this.set('isBalconiesEditing', false);
      this.set('isPriceEditing', false);
      this.set('isDepositEditing', false);
      this.set('isBalconiesEditing', false);
      this.set('isFurnishingStateEditing', false);
    },

    shortlistListing: function() {

    },
  },

  isShortlisted: function() {
    return this.model.get('isShortlisted');
  }.property('model.isShortlisted'),
});
