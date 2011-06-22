// ==========================================================================
// Project:   Fulcrum 
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

Fulcrum.Story = SC.Record.extend( /** @scope Fulcrum.Story.prototype */ {
  primaryKey: 'id',

  id: SC.Record.attr(String),
  project_id: SC.Record.attr(String),
  story_type: SC.Record.attr(String),
  description: SC.Record.attr(String),
  name: SC.Record.attr(String),
  url: SC.Record.attr(String),
  requested_by: SC.Record.attr(String),
  estimate: SC.Record.attr(String),
  created_at: SC.Record.attr(String)  

});