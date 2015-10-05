// For more information see: http://emberjs.com/guides/routing/

Howsing.Router.map(function() {
  this.resource('listings', function() {
    this.resource('listing', { path: '/:id' });
    this.route('new');
  });

  this.route('login');
  this.route('logout');
});
