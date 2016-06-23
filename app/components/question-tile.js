import Ember from 'ember';

export default Ember.Component.extend({
  bestQuestion: Ember.inject.service(),

  sortBy: ['score:desc'],
  sortedComments: Ember.computed.sort('question.comments', 'sortBy'),

  actions: {
    delete(question) {
      if(confirm("Are you sure you'd like to delete this question?")) {
        this.sendAction('destroyQuestion', question);
      }
    },
    upvote(comment) {
      this.sendAction('upvote', comment);
    },
    downvote(comment) {
      this.sendAction('downvote', comment);
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment, params) {
      this.sendAction('update', comment, params);
    },
    add(comment) {
      this.get('bestQuestion').add(comment);
    }
  }
});
