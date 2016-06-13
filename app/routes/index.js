import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
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

    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    }
  }
});
