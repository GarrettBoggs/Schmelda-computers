import Ember from 'ember';

export function computerInventory(params/*, hash*/) {
  var computerInventory = params[0].get('inventory');

  if(computerInventory < 4){
     return Ember.String.htmlSafe('<p>Low Inventory!</p>');
  } else{
    return Ember.String.htmlSafe('<p>Plenty of stock!</p>');
  }
}

export default Ember.Helper.helper(computerInventory);
