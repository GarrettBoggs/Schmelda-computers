import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    calcTotal(items) {
      this.get('shoppingCart').addTotal(items);
    },
  }
});
