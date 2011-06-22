// ==========================================================================
// Project:   Fulcrum
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

/** @namespace

    Fulcrum is a SproutCore-based front-end to the Pivotal Tracker API.
    
    @extends SC.Object
*/
Fulcrum = SC.Application.create(
  /** @scope Fulcrum.prototype */ {

    NAMESPACE: 'Fulcrum',
    VERSION: '0.1.0',

    store: SC.Store.create().from('Fulcrum.PivotalDataSource'),

    userDefaults: SC.UserDefaults.create({ appDomain: 'fulcrum.pivotal' })
    
  });
