import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category', 'tag'],
  category: null,
  tag: null
});