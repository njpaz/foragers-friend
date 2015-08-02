import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  location: DS.attr('string'),
  createdAt: DS.attr('string', {
      defaultValue() { return new Date(); }
  }),
  updatedAt: DS.attr('string', {
      defaultValue() { return new Date(); }
  })
});
