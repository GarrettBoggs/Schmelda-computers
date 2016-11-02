import DS from 'ember-data';

export default DS.Model.extend({
    price: DS.attr(),
    type: DS.attr(),
    make: DS.attr(),
    RAM: DS.attr(),
    CPU: DS.attr(),
    Hardrive: DS.attr()
});
