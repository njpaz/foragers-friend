import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    // Ember.run(function() {
      // this.locationTimer = setInterval(function(){
      //   alert('hey fool')
      //   navigator.geolocation.getCurrentPosition(function(position) {
      //     model.set('latitude', position.coords.latitude);
      //     model.set('longitude', position.coords.longitude);
      //   });
      // }, 1000)
    // });
    controller.set('model', model);
  },
  model: function(){
    var model = this.store.createRecord('find');
    return model;
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
