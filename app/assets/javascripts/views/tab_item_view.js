Howsing.TabItem = Ember.View.extend({
  tagName: 'li',
  classNameBindings: ['active'],

  activeChanged: function() {
    var _this = this;
    Ember.run.next(this, function() { //delay
      if (!_this.isDestroyed) {
        _this.set('active', _this.get('childViews.firstObject.active'));
      }
    });
  }.observes('childViews.firstObject.active'), //get the active state from the linkTo helper
});
