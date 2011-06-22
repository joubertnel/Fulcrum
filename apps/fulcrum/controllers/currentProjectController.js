// ==========================================================================
// Project:   Fulcrum 
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

Fulcrum.currentProjectController = SC.ObjectController.create({
  contentBinding: SC.Binding.from('Fulcrum.projectController.selection').oneWay().single(),

});
