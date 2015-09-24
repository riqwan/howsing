Howsing.ListingController = Ember.ObjectController.extend({
  actions: {
    editPropertyType: function() {
      this.set('isPropertyTypeEditing', true);
    },

    editArea: function() {
      this.set('isAreaEditing', true);
    },

    editBuildUpArea: function() {
      this.set('isBuildUpAreaEditing', true);
    },

    editBedrooms: function() {
      this.set('isBedroomsEditing', true);
    },

    editBathrooms: function() {
      this.set('isBathroomsEditing', true);
    },

    editBalconies: function() {
      this.set('isBalconiesEditing', true);
    },

    editPrice: function() {
      this.set('isPriceEditing', true);
    },

    editDeposit: function() {
      this.set('isDepositEditing', true);
    },

    editFurnishingState: function() {
      this.set('isFurnishingStateEditing', true);
    },

    saveContent: function() {
      var listing = this.get('model');

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
        if (Boolean(shortlists.get('length'))) {
          console.log('Im in');

          var shortlist = _this.store.find('shortlist', {
            user_id: _this.currentUser.id,
            listing_id: listing.id,
          }).then(function(shortlists) {
            shortlists.get('firstObject').destroyRecord().then(function() {
              console.log('Record Destroyed.');
            });
          });
        } else {
          shortlist = _this.store.createRecord('shortlist', {
            listing: listing,
            user: _this.currentUser,
          });

          shortlist.save().then(function() {
            console.log('Record Created.');
          });
        }
      });
    },
  },

  isShortlisted: function() {
    var listing = this.get('model');
    var shortlisted;

    this.currentUser.get('shortlists').then(function(userShortlists) {
      var shortlistExists = Boolean(userShortlists.get('length'));

      if (shortlistExists) {
        shortlisted = true;
      } else {
        shortlisted = false;
      }

      return shortlisted;
    });

    console.log(shortlisted);
    return shortlisted;
  },
});
