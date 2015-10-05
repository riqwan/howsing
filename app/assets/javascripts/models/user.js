Howsing.User = DS.Model.extend({
  email: DS.attr('string'),
  isLandlord: DS.attr('boolean'),
  listings: DS.hasMany('shortlist', { async: true }),
});
