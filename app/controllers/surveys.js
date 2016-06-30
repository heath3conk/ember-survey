import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts surveys by timestamp
  actions: {
    addSurvey: function() {
      var newSurvey = this.store.createRecord('survey', {
        title: this.get('title'),
        creatorId: this.get('creatorId'),
        timestamp: new Date().getTime()
      });
      newSurvey.save();
    }
  }
});
