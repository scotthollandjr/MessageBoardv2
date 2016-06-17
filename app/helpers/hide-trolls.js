import Ember from 'ember';

export function hideTrolls(params) {
  var thisScore = params;
  if (thisScore < 0) {
    return Ember.String.htmlSafe('trollDiv');
  }
}

export default Ember.Helper.helper(hideTrolls);
