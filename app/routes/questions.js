import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    findQuestions: function() {
      return Ember.RSVP.hash({
        questions: this.get('store').findAll('question'),
        surveys: this.get('store').findAll('survey')
      });
    };
    // if (params) {
    //   return this.store.findRecord('question', params["question_id"]);
    // }
    // else {
    //   console.log("params" + params.object);
    //   return this.store.findAll('question');
    // }
  },
  actions: {
    return this.store.findAll('question');
  }
});
