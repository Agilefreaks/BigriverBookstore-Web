import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class SearchBooksComponent extends Component {
	placeholderSrc = 'placeholder-img.png';
	@tracked showPlaceholder = true;

	@action
	loaded() {
		this.showPlaceholder = false;
	}

	@action
	error(event) {
		event.target.src = this.placeholderSrc;
		this.showPlaceholder = false;
	}
}
