import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
	namespace: `${ENV.rootURL}api`
});