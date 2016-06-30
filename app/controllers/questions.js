import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        questionText: this.get('questionText'),
        choiceOne: this.get('choiceOne'),
        choiceTwo: this.get('choiceTwo'),
        choiceThree: this.get('choiceThree'),
        choiceFour: this.get('choiceFour'),
        timestamp: new Date().getTime()
        // how do I get the survey id in here? 
      });
      newQuestion.save();
    }
  }
});
