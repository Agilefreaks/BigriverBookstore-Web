import Component from '@ember/component';

export default Component.extend({
	classNames: ['img-fancy-load'],
	placeholderSrc: 'http://placehold.jp/d1d1d1/707070/400x300.png?text=No%20Image',
	showImg: false,

	didInsertElement() {
		this._super(...arguments);
		this._initImage();
	},

	_initImage() {
		const img = new Image();

		img.src = this.get('src');

		img.addEventListener('load', () => {
			// this is to handle if the component has been destroyed before finishing in tests
			if (this.isDestroyed) {
					return;
			}

			this.set('showImg', true);
		});

		img.addEventListener('error', () => {
			// this is to handle if the component has been destroyed before finishing in tests
			if (this.isDestroyed) {
					return;
			}

			this.set('showImg', true);
			this.set('src', this.get('placeholderSrc'));
		});
	}
});
