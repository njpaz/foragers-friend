import Ember from 'ember';
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
  }),
  poll: function(){
    var _this = this;
    // debugger
    if (_this.isNew) {
      Ember.run.later( function() {
         // _this.reload();
        navigator.geolocation.getCurrentPosition(function(position) {
          _this.set('latitude', position.coords.latitude);
          _this.set('longitude', position.coords.longitude);
        }); 
        _this.poll();
      }, 500);      
    }   
  }.observes('didLoad').on('init')
});