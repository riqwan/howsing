Howsing.ListingController = Ember.ObjectController.extend({
  actions: {
    saveContent: function() {
      if (this.model.get('user').get('id') === this.currentUser.id) {
        var listing = this.get('model');
        listing.save();
      }
    },

    shortlistListing: function() {
      var shortlist = this.get('model').get('shortlist');
      var _this = this;

      if (shortlist.get('checked')) {
        this.get('store').find('shortlist', shortlist.get('id')).then(function(rec) {
          rec.destroyRecord();
          _this.get('model').reload();
        });
      } else {
        shortlist = this.store.createRecord('shortlist', { listing: this.get('model') });

        shortlist.save().then(function() {
          _this.get('model').reload();
        });
      }

      this.currentUser.reload();
    },

    sendEmail: function() {
      var listingId = this.get('model').get('id');

      $.ajax({
        url: '/listings/send_email',
        data: { id: listingId },
        success: function(response) {
          console.log('email sent');
        },

        failure: function() {
          console.log('Mail couldn\'t be sent');
        },
      });
    },
  },

  isShortlisted: function() {
    return this.get('model').get('shortlist').get('checked');
  }.property('model.shortlist.checked'),
});
