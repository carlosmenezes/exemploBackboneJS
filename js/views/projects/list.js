define(
	['jQuery', 'Underscore', 'Backbone',
	 'collections/projects',
	 'text!templates/project/list.html'],
	function($, _, Backbone, projectsCollection, projectListTemplate) {
		var projectListView = Backbone.View.extend({
			el: '#content',
			initialize: function() {
				this.collection = new projectsCollection;
				this.collection.add({ name: 'Carlos' });
					
				var compiledTemplate = _.template(projectListTemplate, { projects: this.collection.models });
				
				alert($(projectListTemplate));
				$(this.el).html(compiledTemplate);
			}
		});
	
		return new projectListView;
	}
);
