Howsing.Listing = DS.Model.extend({
  area: DS.attr('string'),
  bedrooms: DS.attr('number'),
  furnishingState: DS.attr('string'),
  propertyType: DS.attr('string'),
  bathrooms: DS.attr('number'),
  balconies: DS.attr('number'),
  buildUpArea: DS.attr('number'),
  price: DS.attr('number'),
  deposit: DS.attr('number'),
  user: DS.belongsTo('user'),
  shortlist: DS.belongsTo('shortlist', { async: true }),
});
