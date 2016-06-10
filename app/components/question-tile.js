import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm("Are you sure you'd like to delete this question?")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
