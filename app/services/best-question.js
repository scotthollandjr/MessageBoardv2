import Ember from 'ember';

export default Ember.Service.extend({
  commentsArr: [],

  add(comment) {
    this.get('commentsArr').pushObject(comment);
  }
});
