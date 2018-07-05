import Component from '@ember/component';
import { computed } from '@ember/object';
import Table from 'ember-light-table';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
	sort: "",
	sortedModel: computed.sort('model', 'sortBy').readOnly(),
	sortBy: computed('dir', 'sort', function() {
		return [`${this.get('sort')}:desc`];
	}).readOnly(),
	setRows: function(rows, that) {
		that.get('table').setRows([]);
		that.get('table').setRows(rows);
	},
	filterAndSortModel: function(that) {
		let model = that.get('sortedModel');
		let result = model;
		that.get('setRows')(model, that);
	},
	columns: computed(function() {
		return [{
			label: 'Id',
			valuePath: 'id',
			width: '150px'
		}, {
			label: 'Type',
			valuePath: 'type',
			width: '150px'
		}, {
			label: 'Hit-Points',
			valuePath: 'healthpoints',
			width: '150px'
		}];
	}),

	table: computed('model', function() {
		return new Table(this.get('columns'), this.get('model'));
	}),
	actions: {
		onColumnClick(column) {
			this.set('sort', column.get('valuePath'))

			this.get('filterAndSortModel')(this);
			// console.info(column)
		}
	}
});