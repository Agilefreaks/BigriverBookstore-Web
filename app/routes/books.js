import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'bigriver-bookstore/config/environment'

export default class BooksRoute extends Route {
  @service store;

  model() {
    return this.store.query('book', {
      page: {
        size: ENV.BOOKS_PER_PAGE
      },
      include: 'author,photos'
    });
  }
}
