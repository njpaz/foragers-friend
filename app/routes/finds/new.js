import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var model = this.store.createRecord('find');

    navigator.geolocation.getCurrentPosition(function(position) {
      model.set('latitude', position.coords.latitude);
      model.set('longitude', position.coords.longitude);
    });

    return model;
  },
  exit: function() {
    var model = this.get('currentModel');

    if (model.get("isNew") && !model.get("isSaving")) {
      model.deleteRecord();
    }
  },
  actions: {
    save: function(model){
      var _this = this;

      model.save().then(function() {
        _this.transitionTo('finds');
      });
    }
  }
});
