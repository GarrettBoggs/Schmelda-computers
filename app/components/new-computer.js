import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComputer() {
      var params = {
        price: this.get('price'),
        type: this.get('type'),
        make: this.get('make'),
        CPU: this.get('CPU'),
        RAM: this.get('RAM'),
        Hardrive: this.get('Hardrive'),
      };
      this.sendAction('saveComputer', params);
    }
  }
});
