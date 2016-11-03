import Ember from 'ember';
var total = 0;
export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  computerInv: Ember.computed('computer.inventory', function(){
    if(this.get('computer.inventory')< 4){
      return "Low Inventory!";
    } else{
      return "In Stock.";
    }
  }),

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
        item.save();
      }

    },
  }
});
