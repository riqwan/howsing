// For more information see: http://emberjs.com/guides/routing/

Howsing.Router.map(function() {
  this.resource('listings', function() {
    this.resource('listing', { path: '/:id' });

    this.route('new');
  });

  this.resource('login', function() {
    this.route('new');
    this.route('destroy');
  });
});
