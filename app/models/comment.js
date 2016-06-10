import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  username: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  questions: DS.belongsTo('question', { async: true })
});
