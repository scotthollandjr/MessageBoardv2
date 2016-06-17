import Ember from 'ember';

export default Ember.Service.extend({
  comments: [],
  voteBest(comments) {
    this.get('comments').pop();
    this.get('comments').pushObject(comments);
  }
});
