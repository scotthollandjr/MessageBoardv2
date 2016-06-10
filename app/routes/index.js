import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('comment');
  },

  actions: {
    save3(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('index');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    }
  }
});
