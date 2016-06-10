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
        date: this.get('date')
      };
      this.set('addNewComment', false);
      this.sendAction('save2', params);
    }
  }
});
