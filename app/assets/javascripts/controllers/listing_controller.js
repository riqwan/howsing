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
      var listingShortlist = listing.get('shortlist');

      if (listingShortlist.get('checked')) {
        debugger;
        listingShortlist.destroyRecord().then(function(shortlist) {
          console.log('Record Destroyed.');
          listing.reload();
        });
      } else {
        listingShortlist = this.store.createRecord('listingShortlist', {
          listing: listing,
        });

        listingShortlist.save().then(function() {
          console.log('Record Created.');
          listing.reload();
        });
      }
    },

    sendEmail: function() {
      $.ajax({
        url: '/listings/send_email',
        success: function(response) {
          console.log('email sent');
        },

        failure: function() {
          console.log('Mail couldn\'t be sent');
        },
      });
    },
  },
});
