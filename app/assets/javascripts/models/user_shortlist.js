Howsing.UserShortlist = DS.Model.extend({
  listing: DS.belongsTo('listing', { async: true }),
  user: DS.belongsTo('user'),
});
