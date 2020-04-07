import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'bigriver-bookstore/config/environment'

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.API_BASE_URL;
  namespace = 'v2';
}
