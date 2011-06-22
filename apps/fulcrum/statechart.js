// ==========================================================================
// Project:   Fulcrum
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

sc_require('statechart/loggedout/loggedout');
sc_require('statechart/welcome/welcome');

Fulcrum.statechart = SC.Statechart.create({

  rootState: SC.State.design({

    initialSubstate: 'loggedOutState',

    loggedOutState: SC.State.plugin('Fulcrum.LoggedOutState'),

    welcomeState: SC.State.plugin('Fulcrum.WelcomeState')

  })

});