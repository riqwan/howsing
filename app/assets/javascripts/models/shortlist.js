Howsing.Shortlist = DS.Model.extend({
  listing: DS.belongsTo('listing', { async: true }),
  user: DS.belongsTo('user', { async: true }),
});

// Howsing.Shortlist.FIXTURES = [
//   {
//     id: 1,
//     listing: 1,
//   },
//   {
//     id: 2,
//     listing: 2,
//   },
//   {
//     id: 3,
//     listing: 3,
//   },
// ];
