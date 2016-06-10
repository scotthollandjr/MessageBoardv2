import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  subject: DS.attr(),
  username: DS.attr(),
  content: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
