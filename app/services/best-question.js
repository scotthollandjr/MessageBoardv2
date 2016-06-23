import Ember from 'ember';

export default Ember.Service.extend({
  commentsArr: [],

  voteBest(comment) {
    this.get('comments').pop();
    this.get('comments').pushObject(comment);
  }
});
