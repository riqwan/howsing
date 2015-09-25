Howsing.HowsingListingComponent = Ember.Component.extend({
  click: function() {
    var listElement = '.listing-list-item-link';
    $(listElement).removeClass('active');

    if ($(event.target).hasClass(listElement)) {
      $(event.target).addClass('active');
    } else {
      $(event.target).closest(listElement).addClass('active');
    }
  },
});
