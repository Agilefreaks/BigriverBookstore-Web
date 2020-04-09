import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import page from 'bigriver-bookstore/tests/pages/books';

module('Integration | Component | img-fancy-load', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ImgFancyLoad />`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('the placeholder was replaced by an image', async function(assert) {
    await render(hbs`<ImgFancyLoad src="http://placehold.jp/d1d1d1/707070/400x300.png?text=No%20Image" />`);

    assert.ok(page.fancyPlaceholder);

    setTimeout(function() {
      assert.notOk(page.fancyPlaceholder);
    });
  });
});
