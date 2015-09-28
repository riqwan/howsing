Howsing.HowsingListingComponent = Ember.Component.extend({
  click: function() {
    var listElement = '.listing-list-item-link';
    var topPosition;

    $(listElement).removeClass('active');
    if ($(event.target).hasClass(listElement)) {
      $(event.target).addClass('active');
      topPosition = $(event.target).position().top;
    } else {
      $(event.target).closest(listElement).addClass('active');
      topPosition = $(event.target).closest(listElement).position().top;
    }

    $('.listings-container').animate({scrollTop: topPosition});
  },

  didInsertElement: function() {
    var activeElement = this.$('.active');

    if (activeElement.length) {
      var topPosition = $(activeElement).position().top;
      $('.listings-container').animate({scrollTop: topPosition});
    }
  },
});
