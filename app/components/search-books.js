import Component from '@glimmer/component';
import { action, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SearchBooksComponent extends Component {
  @service router;
  @tracked keyword = '';

  get isDisabled() {
    return this.keyword.trim() === '';
  }

  @action
  searchByAuthor() {
    return this.router.transitionTo('search', { queryParams: { query: this.keyword }});
  }
}
