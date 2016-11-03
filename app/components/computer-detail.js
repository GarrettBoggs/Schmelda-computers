import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['price:desc'],
  sortedComputers: Ember.computed.sort('computers', 'sortBy'),

});
