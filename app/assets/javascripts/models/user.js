Howsing.User = DS.Model.extend({
  email: DS.attr('string'),
  shortlists: DS.hasMany('shortlist', { async: true }),
  listings: DS.hasMany('listing', { async: true }),
  isLandlord: DS.attr('boolean'),
});
