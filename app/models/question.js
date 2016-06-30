import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';
// need to add survey model and then update relationship so a question belongsTo a survey

export default Model.extend({
  surveyId: attr('number'),
  questionText: attr('string'),
  choiceOne: attr('string'),
  choiceTwo: attr('string'),
  choiceThree: attr('string'),
  choiceFour: attr('string'),
  timestamp: attr('number') // does EmberData or Firebase update this automatically?
});
