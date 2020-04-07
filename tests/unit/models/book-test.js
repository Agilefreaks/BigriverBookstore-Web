import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | book', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('book', {});
    assert.ok(model);
  });

  test('when one or more images per book return first one', function (assert) {
    const store = this.owner.lookup('service:store');

    const photo1 = store.createRecord('photo', { uri: 'https://url-img-1.com', title: 'Img #1' });
    const photo2 = store.createRecord('photo', { uri: 'https://url-img-2.com', title: 'Img #2' });
    const model = store.createRecord('book', { title: 'Book #1', photos: [photo1, photo2] });

    assert.equal(model.image.uri, 'https://url-img-1.com');
  });

  test('when no image provided return the placeholder', function (assert) {
    const store = this.owner.lookup('service:store');

    const placeholder = { uri: 'http://placehold.jp/d1d1d1/707070/400x300.png?text=No%20Image', title: 'No Image' };
    const model = store.createRecord('book', { title: 'Book #1' });

    assert.equal(model.image.uri, 'http://placehold.jp/d1d1d1/707070/400x300.png?text=No%20Image');
  });
});
