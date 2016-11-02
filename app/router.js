import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('newComputer', {path: '/computers/new'});
  this.route('computer', {path: '/computers/:computer_id'});
  this.route('editComputer', {path: 'computers/:computer_id/edit'} );
});

export default Router;
