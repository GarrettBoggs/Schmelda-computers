import Ember from 'ember';
    // var total;
export default Ember.Service.extend({
  items: [],
  total: 0,
  add(item) {
    this.get('items').pushObject(item);
    var currentTotal = this.get('total');
    var itemPrice = item.get('price');
    var newTotal = currentTotal + itemPrice;
    this.set('total',newTotal);
    console.log(this.get('total'));
  }
})
