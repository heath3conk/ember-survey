import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('questions', function() {
    this.route('question', { path: '/:question_id', resetNamespace: true });
  });
  this.route('surveys');
});

export default Router;
