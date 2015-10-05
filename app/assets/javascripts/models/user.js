Howsing.User = DS.Model.extend({
  email: DS.attr('string'),
  isLandlord: DS.attr('boolean'),
  shortlists: DS.hasMany('shortlist', { async: true }),
});
