import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import page from 'bigriver-bookstore/tests/pages/books';

module('Integration | Component | search-books', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<SearchBooks />`);

    assert.notEqual(this.element.textContent.trim(), '');
  });
  test('when providing an empty string the submit is disabled', async function (assert) {
    await render(hbs`<SearchBooks />`);
    await page
      .fillInSearchInput('  ');

    assert.equal(page.searchDisabledPresent, true);
  });

  test('when providing a good search query the submit is not disabled', async function (assert) {
    await render(hbs`<SearchBooks />`);
    await page
      .fillInSearchInput('prof');

    assert.equal(page.searchDisabledPresent, false);
  });
});
