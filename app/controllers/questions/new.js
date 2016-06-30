import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        surveyId: this.get('surveyId'), //is this necessary? maybe EmberFire just does this
        questionText: this.get('questionText'),
        choiceOne: this.get('choiceOne'),
        choiceTwo: this.get('choiceTwo'),
        choiceThree: this.get('choiceThree'),
        choiceFour: this.get('choiceFour'),
        timestamp: new Date().getTime()
        // how do I get the survey id in here? 
      });
      var survey = this.get('survey');
      survey.get('questions').addObject(newQuestion);
      newQuestion.save().then(function(){
        return survey.save();
      });
    }
  }
});
