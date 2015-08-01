import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var localDB = new PouchDB('local_pouch');

export default Adapter.extend({
  db: localDB
});
