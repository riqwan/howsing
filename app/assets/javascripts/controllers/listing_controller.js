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
      var shortlists = this.get('model.shortlists');
      var shortlistsCount = Boolean(shortlists.get('length'));
      var shortlist;

      if (shortlistsCount) {
        shortlist = shortlists.get('firstObject');
        this.store.find('shortlist', shortlist.id).then(function(shortlist) {
          shortlist.destroyRecord();
        });
      } else {
        shortlist = this.store.createRecord('shortlist', {
          listing: listing,
          user: this.currentUser,
        });

        shortlist.save().then(function() {
          console.log('Done.');
        });
      }
    },
  },

  isShortlisted: function(key, value) {
    var shortlists = this.get('model.shortlists');
    var shortlistsCount = Boolean(shortlists.get('length'));

    return shortlistsCount;
  }.property('model.shortlists.[]'),
});
