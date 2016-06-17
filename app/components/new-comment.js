import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    save1() {
      var params = {
        username: this.get('username'),
        content: this.get('content'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        score: 0,
        question: this.get('question')
      };
      this.set('addNewComment', false);
      this.sendAction('save2', params);
      this.set('username', "");
      this.set('content', "");
    }
  }
});
