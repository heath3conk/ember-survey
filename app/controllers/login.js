import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    login() {
      this.get('session').authenticate('authenticator:firebase', {
        'email': this.get('email'),
        'password': this.get('password')
      }).then(function(){
        this.transitionToRoute('index');
      }.bind(this));
    }
  }
});