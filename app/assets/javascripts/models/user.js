Howsing.User = DS.Model.extend({
  email: DS.attr('string'),
  isLandlord: DS.attr('boolean'),
  userShortlists: DS.hasMany('userShortlist', { async: true }),
});
