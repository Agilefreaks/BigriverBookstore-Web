import { module, test } from 'qunit';
import { visit, currentURL, waitUntil } from '@ember/test-helpers';
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

  test('fetch more data when scrolled down', async function(assert) {
    await page.visit();

    assert.equal(page.books().count, 9);

    document.querySelector(page.loaderClass).scrollIntoView();

    await waitUntil(() => {
      return page.books().count === 18;
    });

    assert.equal(page.books().count, 18);
  });
});
