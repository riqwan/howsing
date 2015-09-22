// For more information see: http://emberjs.com/guides/routing/

Howsing.Router.map(function() {
  this.resource('listings', function() {
    this.resource('listing', { path: '/:id' });
    this.route('edit', { path: '/edit/:id' });

    this.route('new');
  });

  this.resource('session', function() {
    this.route('new');
    this.route('destroy');
  });
});
