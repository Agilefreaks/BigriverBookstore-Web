import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'bigriver-bookstore/config/environment'

export default class SearchRoute extends Route {
  @service store;
  @service infinity;

  queryParams = {
    query: {
      refreshModel: true
    }
  };

  model(params) {
    const query = params.query ? params.query : '';

    return this.infinity.model('book', {
      filter: {
        'author.name': query
      },
      include: 'author,photos',
      perPage: ENV.BOOKS_PER_PAGE,
      startingPage: 1,
      perPageParam: 'page[size]', 
      pageParam: 'page[number]', 
      countParam: 'meta.total_resources'
    });
  }
}
