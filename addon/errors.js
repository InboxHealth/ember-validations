import Ember from 'ember';
import DS from 'ember-data';

export default DS.Errors.extend({
  unknownProperty: function(property) {
    this.set(property, Ember.makeArray());
    return this.get(property);
  }
});