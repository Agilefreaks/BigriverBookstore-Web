import {
  create,
  visitable,
  collection,
  isPresent,
  fillable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  books: collection({
    itemScope: '[data-test="book-item"]',
    item: {
      hasTitle: isPresent('[data-test="book-title"]'),
      hasAuthor: isPresent('[data-test="book-author"]'),
      hasImage: isPresent('[data-test="book-image"]')
    }
  }),
  searchDisabledPresent: isPresent('[data-test="search-btn"]:disabled'),
  fillInSearchInput: fillable('input', { scope: '[data-test="search-by-author-form"]' }),
  fancyPlaceholder: isPresent('[data-test="fancy-placeholder"]'),
});
