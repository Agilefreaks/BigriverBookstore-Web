import {
  create,
  visitable,
  collection,
  isPresent
} from 'ember-cli-page-object';

export default create({
  visitOkParam: visitable('/search?query=prof'),
  visitNotOkParam: visitable('/search?query=asdasad'),
  noResultsExists: isPresent('[data-test="no-books"]'),
  books: collection({
    itemScope: '[data-test="book-item"]',
    item: {
      hasTitle: isPresent('[data-test="book-title"]'),
      hasAuthor: isPresent('[data-test="book-author"]'),
      hasImage: isPresent('[data-test="book-image"]')
    }
  }),
});
