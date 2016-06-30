import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  creatorId: attr('number', { defaultValue: 1 }),
  title: attr('string'),
  timestamp: attr('number')
});
