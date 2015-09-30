Howsing.User = DS.Model.extend({
  email: DS.attr('string'),
  shortlists: DS.hasMany('shortlist'),
  isLandlord: DS.attr('boolean'),
});
