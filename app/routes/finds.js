import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('find');
  },
  actions: {
    delete: function(model){
      if (confirm("Do you really want to delete this find?")) {
        model.destroyRecord()
      }
    }
  }
});
