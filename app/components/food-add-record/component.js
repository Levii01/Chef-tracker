import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    saveNewItem(foodName) {
      this.get('store')
        .createRecord('chef',{name: foodName})
        .save();
      this.set('newItem','')
    }
  }
});
