import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class SearchBooksComponent extends Component {
	placeholderSrc = 'http://placehold.jp/d1d1d1/707070/400x300.png?text=No%20Image';
	@tracked showPlaceholder = true;

	@action
	loaded() {
		this.showPlaceholder = false;
	}

	@action
	error() {
		this.src = this.placeholderSrc;
		this.showPlaceholder = false;
	}
}
