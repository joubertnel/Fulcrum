// ==========================================================================
// Project:   Fulcrum
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */


Fulcrum.loginController = SC.ObjectController.create({

  content: SC.Object.create({
    authTokenBinding: SC.Binding.from('Fulcrum.userDefaults.pivotalAuthToken')
  }),


  /// Computed properties

  isAuthenticated: function() {
    var isAuthed = this.get('authToken') !== null;
    return isAuthed;
  }.property('authToken').cacheable()

  
});