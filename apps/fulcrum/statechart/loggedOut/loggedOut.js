// ==========================================================================
// Project:   Fulcrum
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

Fulcrum.LoggedOutState = SC.State.extend({

  /// State behavior
  enterState: function() {
    Fulcrum.getPath('mainPage.loginPane').append();
  },

  exitState: function() {
    var loginPane = Fulcrum.getPath('mainPage.loginPane');
    loginPane.animate('top', -245, {duration:0.3, timing:'ease-in'}, function() {
      loginPane.remove();
    });
  },


  /// Actions  
  login: function(sender) {
    Fulcrum.projectController.set('content', Fulcrum.store.find(Fulcrum.Project));
  },

  /// Observers
  didGetProjects: function() {
    Fulcrum.statechart.gotoState('welcomeState');
  }.observes('Fulcrum.projectController.content')
  

});