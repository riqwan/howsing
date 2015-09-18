Howsing.Shortlist = DS.Model.extend({
  user: DS.belongsTo('user'),
  listing: DS.belongsTo('user'),
});
