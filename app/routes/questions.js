import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('application');
    }
  },
  
  model: function(){
    return this.store.findAll('question');
  }
});
