import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('increment-decrement-property', 'Integration | Component | increment decrement property', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{increment-decrement-property}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#increment-decrement-property}}
      template block text
    {{/increment-decrement-property}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
