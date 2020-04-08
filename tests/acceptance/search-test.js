import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import page from 'bigriver-bookstore/tests/pages/search';

module('Acceptance | search', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /search', async function(assert) {
    await visit('/search');

    assert.equal(currentURL(), '/search');
  });

  test('when provided an okay parameter we have at least one book', async function(assert) {
    await page.visitOkParam();

    assert.notOk(page.noResultsExists);
    assert.ok(page.books(0).hasTitle);
    assert.ok(page.books(0).hasAuthor);
    assert.ok(page.books(0).hasImage);
  });

  test('when provided with a not okay parameter we received no books found', async function(assert) {
    await page.visitNotOkParam();

    assert.ok(page.noResultsExists);
  });
});
