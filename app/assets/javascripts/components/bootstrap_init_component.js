Howsing.BootstrapInitComponent = Ember.Component.extend({
  initTabs: (function() {
    return $('.nav-tabs .active').tab('show');
  }).on('didInsertElement'),
});
