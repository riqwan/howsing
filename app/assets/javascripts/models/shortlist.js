Howsing.Shortlist = DS.Model.extend({
  listing: DS.belongsTo('listing', { async: true }),
  user: DS.belongsTo('user', { async: true }),
  checked: DS.attr('boolean', { defaultValue: true }),
});
