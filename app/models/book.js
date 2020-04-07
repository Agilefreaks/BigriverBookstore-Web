import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('date') datePublished;
  @attr('number') isbn;
  @belongsTo('author') author;
  @hasMany('photo') photos;

  get image() {
    const firstImage = this.photos.get('firstObject');
    return firstImage ? firstImage : { uri: 'http://placehold.jp/d1d1d1/707070/400x300.png?text=No%20Image', title: 'No Image' };
  }
}
