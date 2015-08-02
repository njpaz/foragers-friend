import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('find');
    // return this.modelFor('find')
  },
  actions: {
    save: function(model){
      model.save();
      // this.get('model').save();
    }
  }
});
