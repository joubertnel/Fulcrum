// ==========================================================================
// Project:   Fulcrum
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */

Fulcrum.LoginPane = SC.PanelPane.extend(
  /** @scope Fulcrum.loginPane.prototype */ {
    layout: { top:-240, height:240, width:400, centerX:0 },
    
    contentView: SC.View.extend({
      childViews: 'heading fieldsArea'.w(),

      heading: SC.View.design({
	layout: { left:0, top:0, right:0, height:40 },
	childViews: 'title'.w(),
	title: SC.LabelView.design({
	  layout: { left:10, top:10 },
	  value: 'Start Tracking'
	})
      }),

      fieldsArea: SC.View.design({
	layout: { left:10, width:380, top:50, bottom:0 },
	childViews: 'authTokenPrompt authTokenInput loginButton'.w(),

	authTokenPrompt: SC.LabelView.design({
	  layout: { left:10, top:0, height:20 },
	  value: 'Auth Token'
	}),

	authTokenInput: SC.TextFieldView.design({
	  layout: { left:10, top:25, height:25, right:10 },
	  valueBinding: 'Fulcrum.loginController.authToken'
	}),


	loginButton: SC.ButtonView.design({
	  layout: { left:10, bottom:25, height:30, width:80 },
	  title: 'Sign In',
	  action: 'login',
	  target: 'Fulcrum.statechart'
	})
	
      })
      
    }),
    
    didCreateLayer: function() {
      this.invokeLater('animate', 1, 'top', 0, {duration:0.3, timing: 'ease-out' });
    }
    
  });