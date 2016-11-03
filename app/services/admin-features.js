import Ember from 'ember';

export default Ember.Service.extend({
  username: 'admin',
  password: 'admin',
  loggedIn: false,

  login(username, password) {
    if((this.get('username') === username) && (this.get('password') === password)) {
      this.set('loggedIn', true);
    } else {
      alert("Invalid Username and/or Password");
    }
  },
  
  logout() {
    this.set('loggedIn', false);
  }
});
