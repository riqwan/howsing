Howsing.ListingController = Ember.ObjectController.extend({
  actions: {
    saveContent: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        var listing = this.get('model');
        listing.save();
      }
    },

    shortlistListing: function() {
      var listing = this.get('model');

      if (listing.get('isShortlisted')) {
        this.store.find('shortlist', {
          user_id: this.currentUser.get('id'),
          listing_id: listing.get('id'),
        }).then(function(response) {
          response.get('firstObject').destroyRecord().then(function() {
            console.log('Record Destroyed.');
          });

          listing.set('isShortlisted', false);
        });
      } else {
        shortlist = this.store.createRecord('shortlist', {
          listing: listing,
          user: this.currentUser,
        });

        shortlist.save().then(function() {
          console.log('Record Created.');
        });

        listing.set('isShortlisted', true);
      }
    },
  },
});
