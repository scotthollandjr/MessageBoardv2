import Ember from 'ember';

export default Ember.Service.extend({
  comments: [],
  voteBest(comments) {
    comments.length = 0;
    this.get('comments').pushObject(comments);
  }
});
