import Ember from 'ember';
var total = 0;
export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {

    addToCart(item) {
      this.get('shoppingCart').add(item);
      total += item.get('price');
      // console.log(total);
      return total;
    },
  }
});
