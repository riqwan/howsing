Howsing.HowsingListingComponent = Ember.Component.extend({
  didInsertElement: function() {
    var activeElement = this.$('.active');

    if (activeElement.length) {
      var topPosition = $(activeElement).position().top;

      $('.listings-container').animate({scrollTop: topPosition});
    }
  },
});
