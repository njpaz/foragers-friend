import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('finds', {path: '/'}, function() {
    this.route('find', {path: ':id'});
    this.route('new');
  });
});

export default Router;
