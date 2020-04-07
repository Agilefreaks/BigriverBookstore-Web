import Model, { attr } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') name;
  @attr('string') birthplace;
  @attr('date') dateOfBirth;
  @attr('date') dateOfDeath;
}
