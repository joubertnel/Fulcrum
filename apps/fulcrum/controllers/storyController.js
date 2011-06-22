// ==========================================================================
// Project:   Fulcrum 
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

Fulcrum.storyController = SC.ArrayController.create({
  contentBinding: SC.Binding.from('Fulcrum.currentProjectController.content').oneWay().transform(function(currentProject) {
    var query;
    if (currentProject) {
      query = SC.Query.local(Fulcrum.Story, {
        conditions: 'project_id = %@',
        parameters: [currentProject.get('id')]
      });
      return Fulcrum.store.find(query);
    }
  })
});