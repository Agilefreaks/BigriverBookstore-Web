import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import page from 'bigriver-bookstore/tests/pages/books';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting homepage', async function(assert) {
    await page.visit();

    assert.equal(currentURL(), '/');
  });

  test('check if all books are present', async function(assert) {
    await page.visit();

    assert.equal(page.books().count, 9);
  });

  test('check if a book has a title, author and image', async function(assert) {
    await page.visit();

    assert.ok(page.books(0).hasTitle);
    assert.ok(page.books(0).hasAuthor);
    assert.ok(page.books(0).hasImage);
  });

  test('when providing an empty string the submit is disabled', async function (assert) {
    await page
      .visit()
      .fillInSearchInput('  ');

    assert.equal(page.searchDisabledPresent, true);
  });

  test('when providing a good search query the submit is not disabled', async function (assert) {
    await page
      .visit()
      .fillInSearchInput('prof');

    assert.equal(page.searchDisabledPresent, false);
  });
});
