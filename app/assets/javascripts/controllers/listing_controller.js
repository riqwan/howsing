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
      var listing = this.get('model');
      var shortlist;
      var _this = this;
      var shortlists = this.currentUser.get('shortlists').then(function(shortlists) {
        var filteredShortlist = shortlists.filter(function(item, index, self) {
          var userId = item.get('user').get('id');
          var listingId = item.get('listing').get('id');

          if (item.get('user').get('id') === _this.currentUser.id && listing.id === listingId) {
            return true;
          } else {
            return false;
          }
        });

        if (filteredShortlist.length) {
          filteredShortlist.get('firstObject').destroyRecord().then(function() {
            console.log('Record Destroyed.');
          });

          listing.set('isShortlisted', false);
          listing.save();
        } else {
          shortlist = _this.store.createRecord('shortlist', {
            listing: listing,
            user: _this.currentUser,
          });

          shortlist.save().then(function() {
            console.log('Record Created.');
          });

          listing.set('isShortlisted', true);
          listing.save();
        }
      });
    },
  },

  isShortlisted: function() {
    return this.model.get('isShortlisted');
  }.property('model.isShortlisted'),
});
