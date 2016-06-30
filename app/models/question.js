import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  surveyId: attr('number', {defaultValue: 1 }),
  questionText: attr('string'),
  choiceOne: attr('string'),
  choiceTwo: attr('string'),
  choiceThree: attr('string'),
  choiceFour: attr('string'),
  timestamp: attr('number'), // does EmberData or Firebase update this automatically?
  survey: belongsTo('survey')
});
