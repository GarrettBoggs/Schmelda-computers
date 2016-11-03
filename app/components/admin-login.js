import Ember from 'ember';

export default Ember.Component.extend({
  adminFeatures: Ember.inject.service(),

  actions: {
    login() {
      var username = this.get('username');
      var password = this.get('password');
      this.get('adminFeatures').login(username, password);
    },
    logout() {
      this.get('adminFeatures').logout();
    }
  }
});
