import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'bigriver-bookstore/config/environment'

export default class SearchRoute extends Route {
  @service store;

  queryParams = {
    query: {
      refreshModel: true
    }
  };

  model(params) {
    const query = params.query ? params.query : '';

    return this.store.query('book', {
      page: {
        size: ENV.BOOKS_PER_PAGE,
      },
      filter: {
        'author.name': query
      },
      include: 'author,photos'
    });
  }
}
