import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  available: DS.attr('boolean'),
  likes: DS.attr('number', {defualValue: 0})
});
