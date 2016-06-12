import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    save3(params) {
      var newComment = this.store.createRecord('comment', params);
      var question = params.question;
      debugger;
      question.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    update(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key] + " *");
        }
      });
      comment.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      var comment_deletions = question.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    }
  }


});
