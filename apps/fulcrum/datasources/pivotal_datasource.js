// ==========================================================================
// Project:   Fulcrum 
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */


Fulcrum.PivotalDataSource = SC.DataSource.extend( /** @scope Fulcrum.PivotalDataSource.prototype */ {

  /// Properties

  apiHeader: function() {
    return {'X-TrackerToken': Fulcrum.loginController.get('authToken')};
  }.property('Fulcrum.loginController.authToken').cacheable(),

  
  /// Query support

  fetch: function(store, query) {
    var didServiceQuery = NO;
    var project_id;
    
    if (query.recordType === Fulcrum.Project) {
      SC.Request.getUrl('/services/v3/projects').
	header(this.get('apiHeader')).
        notify(200, this, '_didGetProjects', store, query).
	send();
      didServiceQuery = YES;
    }

    if (query.recordType === Fulcrum.Story) {
      project_id = query.parameters;
      SC.Request.getUrl('/services/v3/projects/%@/stories'.fmt(project_id)).
        header(this.get('apiHeader')).
        notify(200, this, '_didGetStories', store, query).
        send();
      didServiceQuery = YES;
    }

    return didServiceQuery;
  },


  /// Response handlers
  _didGetProjects: function(response, store, query) {
    var projectsRootNode;
    var projectNodes;
    var projects;
    var projectJsonText;
    
    if (SC.ok(response)) {
      projectsRootNode = SC.$(response.get('body')).toArray()[0];
      projectNodes = SC.$(projectsRootNode).contents().toArray();
      projects = projectNodes.map(Fulcrum.xmlToJson.transform).filter(function(p) { return p; });
      
      store.loadRecords(Fulcrum.Project, projects);
      store.dataSourceDidFetchQuery(query);
    } else {
      store.dataSourceDidErrorQuery(query, response);
    }
  },

  _didGetStories: function(response, store, query) {
    var storiesRootNode;
    var storyNodes;
    var stories;
    var storyJsonText;
    var storyRecords;
    var project_id;
    var project;
    
    if (SC.ok(response)) {
      storiesRootNode = SC.$(response.get('body')).toArray()[0];
      storyNodes = SC.$(storiesRootNode).contents().toArray();
      stories = storyNodes.map(Fulcrum.xmlToJson.transform).filter(function(s) { return s; });
      SC.Logger.log(stories);
      SC.Logger.log(store.loadRecords(Fulcrum.Story, stories));
      store.dataSourceDidFetchQuery(query);
    } else {
      store.dataSourceDidErrorQuery(query, response);
    }
  }
});