// ==========================================================================
// Project:   Fulcrum 
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

Fulcrum.Project = SC.Record.extend( /** @scope Fulcrum.Project.prototype */ {
  primaryKey: 'id',
  
  id: SC.Record.attr(String),
  name: SC.Record.attr(String),
  current_velocity: SC.Record.attr(String)

});