import EmberObject from '@ember/object';
import TableMixinMixin from 'ember-sand-box/mixins/table-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | table mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let TableMixinObject = EmberObject.extend(TableMixinMixin);
  let subject = TableMixinObject.create();
  assert.ok(subject);
});
