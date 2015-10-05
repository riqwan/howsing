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

// Howsing.Listing.FIXTURES = [
//   {
//     id: 1,
//     area: 'Koramangala',
//     furnishingState: 'Furnished',
//     propertyType: 'Independent House',
//     buildUpArea: 2100,
//     bedrooms: 3,
//     bathrooms: 3,
//     balconies: 5,
//     price: 40000,
//     deposit: 100000,
//     shortlists: [1],
//   },
//   {
//     id: 2,
//     area: 'Lavelle Road',
//     furnishingState: 'Semi-Furnished',
//     propertyType: 'Apartment',
//     buildUpArea: 2400,
//     bedrooms: 4,
//     bathrooms: 3,
//     balconies: 3,
//     price: 65000,
//     deposit: 160000,
//     shortlists: [2],
//   },
//   {
//     id: 3,
//     area: 'MG Road',
//     furnishingState: 'Furnished',
//     propertyType: 'Pent House',
//     buildUpArea: 1900,
//     bedrooms: 2,
//     bathrooms: 3,
//     balconies: 2,
//     price: 32000,
//     deposit: 90000,
//     shortlists: [3],
//   },
//   {
//     id: 4,
//     area: 'Indira Nagar',
//     furnishingState: 'UnFurnished',
//     propertyType: 'Apartment',
//     buildUpArea: 2900,
//     bedrooms: 5,
//     bathrooms: 4,
//     balconies: 4,
//     price: 70000,
//     deposit: 260000,
//     shortlists: [],
//   },
//   {
//     id: 5,
//     area: 'JP Nagar',
//     furnishingState: 'UnFurnished',
//     propertyType: 'Apartment',
//     buildUpArea: 1000,
//     bedrooms: 2,
//     bathrooms: 1,
//     balconies: 1,
//     price: 10000,
//     deposit: 30000,
//     shortlists: [],
//   },
// ];
