Howsing.ListingsEditController = Ember.ObjectController.extend({
  needs: ['listingsNew'],

  selectedPropertyType: function() {
    return this.model.get('propertyType');
  },

  updateListing: function() {
      var area = this.get('area');
      var bedrooms = this.get('bedrooms');
      var furnishingState = this.get('furnishingState').value;
      var propertyType = this.get('propertyType').value;
      var bathrooms = this.get('bathrooms');
      var balconies = this.get('balconies');
      var buildUpArea = this.get('buildUpArea');
      var price = this.get('price');
      var deposit = this.get('deposit');

      var listing = this.store.updateRecord('listing', {
        area: area,
        furnishingState: furnishingState,
        propertyType: propertyType,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        balconies: balconies,
        buildUpArea: buildUpArea,
        price: price,
        deposit: deposit,
      });

      var _this = this;

      function transitionToListing(listing) {
        _this.transitionTo('listing', listing);
      }

      listing = listing.save().then(transitionToListing);
    },
});
