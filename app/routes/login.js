import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {text: "Figure this out" }
    ];
  }
});
