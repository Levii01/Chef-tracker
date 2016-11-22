import Ember from 'ember';

export default Ember.Controller.extend({

  addLike(food) {
  food.incrementProperty('likes');
  food.save()
  },

  disLike(food) {
  food.decrementProperty('likes');
  food.save()
  },
  menuLength: Ember.computed.alias('model.length'),
  availableItem: Ember.computed.filterBy('model', 'available', true),
  actions: {
    makeUnavailable(food) {
      Ember.set(food, 'available', false);
      food.save();
    },

    makeAvailable(food) {
      Ember.set(food, 'available', true);
      food.save();
    },

    saveNewItem() {
      this.store.createRecord('chef', {
        available: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    },

    destroyItem(food) {
      food.destroyRecord();
    }
  }
});
