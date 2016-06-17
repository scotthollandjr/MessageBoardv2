import Ember from 'ember';

export function answered(params) {
  var question = params[0];

  if (question.get('comments').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="unanswered">(no answers yet!)</span>');
  } else if (question.get('comments').get('length') === 1) {
    return Ember.String.htmlSafe('<span class="answerSpan">(' + question.get('comments').get('length') + ' answer)</span>');
  } else {
    return Ember.String.htmlSafe('<span class="answerSpan">(' + question.get('comments').get('length') + ' answers)</span>');
  }
}

export default Ember.Helper.helper(answered);
