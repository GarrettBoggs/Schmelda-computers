import Ember from 'ember';
var total = 0;
export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {

    addToCart(item) {

      var currentInv = item.get('inventory');
      if(currentInv > 0)
      {
        var newInven = currentInv - 1;
        console.log(item.get('price'));
        console.log(item.get('inventory'));
        console.log(newInven);

        item.set('inventory',newInven);
        this.get('shoppingCart').add(item);
      }

    },
  }
});
