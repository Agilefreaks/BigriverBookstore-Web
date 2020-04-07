import Model, { attr  } from '@ember-data/model';

export default class PhotoModel extends Model {
  @attr('string') title;
  @attr('string') uri;
}
