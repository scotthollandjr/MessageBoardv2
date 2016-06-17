import Ember from 'ember';

export function timeStamp(params) {
  var object = params[0];
  var date = object.get('date');
  return date;
}

export default Ember.Helper.helper(timeStamp);
