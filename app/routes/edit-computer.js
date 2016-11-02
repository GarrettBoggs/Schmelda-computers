import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params + "Top params");
    return this.store.findRecord('computer', params.computer_id);
  },

  actions: {
    edit(computer, params) {
    var params = {
      price: parseInt(this.get('price')),
      type: this.get('type'),
      make: this.get('make'),
      RAM: this.get('RAM'),
      CPU: this.get('CPU'),
      Hardrive: this.get('Hardrive')
    };
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        computer.set(key, params[key]);
      }
    });
    computer.save();
    this.transitionTo('index');
    },
    delete(computer) {
      computer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
