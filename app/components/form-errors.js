import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':form-group', 'model.hasErrors:has-error']
});
