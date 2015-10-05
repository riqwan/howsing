Howsing.ListingsNewController = Ember.ObjectController.extend({
  actions: {
    createListing: function() {
      var _this = this;
      var listing = this.store.createRecord('listing', {
        area: this.get('area'),
        bedrooms: this.get('bedrooms'),
        furnishingState: this.get('furnishingState').value,
        propertyType: this.get('propertyType').value,
        bathrooms: this.get('bathrooms'),
        balconies: this.get('balconies'),
        buildUpArea: this.get('buildUpArea'),
        price: this.get('price'),
        deposit: this.get('deposit'),
      });

      listing = listing.save().then(function(listing) {
        _this.transitionTo('listing', listing);
      });
    },
  },

  propertyTypes: [
    { key: 'Apartment', value: 'Apartment' },
    { key: 'Individual House', value: 'Individual House' },
    { key: 'Pent House', value: 'Pent House' },
  ],

  furnishingStates: [
    { key: 'Furnished', value: 'Furnished' },
    { key: 'Unfurnished', value: 'Unfurnished' },
    { key: 'Semi-Furnished', value: 'Semi-Furnished' },
  ],
});
