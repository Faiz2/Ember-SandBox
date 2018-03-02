import Route from '@ember/routing/route';
import inject from 'ember-service/inject';

export default Route.extend({
    ajax: inject()
});
