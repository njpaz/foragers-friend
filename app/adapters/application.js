import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var localDB = new PouchDB('local_pouch');

export default Adapter.extend({
  db: localDB,

  // Ember Data 2.0 Reload behavior
  shouldReloadRecord: function() { return true; },
  shouldReloadAll: function() { return true; },
  shouldBackgroundReloadRecord: function() { return true; },
  shouldBackgroundReloadAll: function() { return true; },

  // Change watcher for ember-data
  immediatelyLoadAllChangedRecords: function() {
    this.db.changes({
      since: 'now',
      live: true,
      returnDocs: false
    }).on('change', function (change) {
      var obj = this.db.rel.parseDocID(change.id);
      // skip changes for non-relational_pouch docs. E.g., design docs.
      if (!obj.type || obj.type === '') { return; }

      var appController = this.container.lookup("controller:application");
      appController.send('kickSpin');

      var store = this.container.lookup('store:main');
      store.find(obj.type);
    }.bind(this));
  }.on('init')
});
