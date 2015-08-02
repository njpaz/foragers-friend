import DS from 'ember-data';
import { Model } from 'ember-pouch';
import EmberValidations from 'ember-validations';

export default Model.extend(EmberValidations, {
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
  }),
  isSaved: function() {
    return !this.get('isNew');
  }.property('isNew'),
  hasErrors: null,

  validations: {
    title: {
      presence: { message: 'must not be blank' }
    }
  }
});
