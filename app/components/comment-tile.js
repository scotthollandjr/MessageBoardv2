import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(comment, params) {
      this.sendAction('update', comment, params);
    },
    upvote(comment) {
      this.sendAction('upvote', comment);
    },
    downvote(comment) {
      this.sendAction('downvote', comment);
    },
    delete(comment) {
      if (confirm("Are you sure you'd like to delete this comment?")) {
        this.sendAction('destroyComment', comment);
      }
    },
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        content: this.get('content')
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
