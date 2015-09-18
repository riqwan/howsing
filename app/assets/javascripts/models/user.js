Howsing.User = DS.Model.extend({
  email: DS.attr('string'),
  shortlists: DS.hasMany('shortlist'),
  listings: DS.hasMany('listing'),
});
