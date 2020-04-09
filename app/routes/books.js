import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'bigriver-bookstore/config/environment'

export default class BooksRoute extends Route {
  @service store;
  @service infinity;

  model() {
    return this.infinity.model('book', {
      include: 'author,photos',
      perPage: ENV.BOOKS_PER_PAGE,
      startingPage: 1,
      perPageParam: 'page[size]', 
      pageParam: 'page[number]', 
      countParam: 'meta.total_resources'
    });
  }
}
