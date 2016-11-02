import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("computer");
  },
  actions: {
    saveComputer(params) {
      console.log("here!!");
      var newComputer = this.store.createRecord('computer', params);
      newComputer.save();
      this.transitionTo('index');
    },
    login() {
      $('.ui.small.modal').modal('show');
    }
  }
});
