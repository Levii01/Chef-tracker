import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makeUnavailable(food) {
      Ember.set(food, 'available', false);
      food.save();
    },

    makeAvailable(food) {
      Ember.set(food, 'available', true);
      food.save();
    },
  },
});
