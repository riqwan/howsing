// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
Howsing.ApplicationAdapter = DS.ActiveModelAdapter.extend({});

// Howsing.ApplicationAdapter = DS.FixtureAdapter.extend({});
