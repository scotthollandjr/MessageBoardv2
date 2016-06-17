import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        username: this.get('username'),
        subject: this.get('subject'),
        content: this.get('content'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
      this.set('username', "");
      this.set('subject', "");
      this.set('content', "");
    }
  }
});
