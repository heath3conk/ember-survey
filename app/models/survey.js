import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
// add belongsTo for creator

export default Model.extend({
  creatorId: attr('number', { defaultValue: 1 }),
  title: attr('string'),
  timestamp: attr('number'),
  questions: hasMany('question', { async: true })
});
