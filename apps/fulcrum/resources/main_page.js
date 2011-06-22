// ==========================================================================
// Project:   Fulcrum
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */


Fulcrum.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'topView leftView centerView'.w(),

    topView: SC.View.design({
      classNames: 'banner',
      layout: { left:0, top:0, right:0, height:60 },
      childViews: 'appname'.w(),
      appname: SC.LabelView.design({
        classNames: 'h1',
        layout: { right:0, height:40, centerY:0, width:150 },
        value: 'Fulcrum'
      })      
    }),

    leftView: SC.View.design({
      classNames: 'leftNav',
      layout: { left:0, top:60, width:200, bottom:0 },
      childViews: 'heading projectListing'.w(),


      heading: SC.LabelView.design({
        classNames: 'columnHeading',
        layout: { left:2, top:0, height:26 },
        value: 'Projects'
      }),

      projectListing: SC.ListView.design({
        layout: { left:2, top:26 },
        contentBinding: 'Fulcrum.projectController.arrangedObjects',
        selectionBinding: 'Fulcrum.projectController.selection',
        showAlternatingRows: YES,
        
        exampleView: SC.View.design(SC.Control, {
          classNames: 'projectListItem',
          childViews: 'projectName velocity'.w(),
          
          velocity: SC.LabelView.design({
            layout: { right:5, width:25 },
            valueBinding: '.parentView.content.current_velocity'
          }),
          
          projectName: SC.LabelView.design({
            valueBinding: '.parentView.content.name'
          })
        })
        
      })
      
    }),

    centerView: SC.View.design({
      layout: { left:200, top:60, right:0, bottom:0 },
      childViews: 'stories'.w(),

      stories: SC.View.design({
        childViews: 'heading storiesListing detail addButton'.w(),
        heading: SC.LabelView.design({
          classNames: 'columnHeading',
          layout: { left:2, top:0, height:26, right: 20 },
          valueBinding: SC.Binding.from('Fulcrum.currentProjectController.content').oneWay().transform(function(project) {
            return project ? 'Stories for %@'.fmt(project.get('name')) : '';
          })
        }),
        
        storiesListing: SC.ListView.design({
          layout: { left:2, top:26, width:200, bottom:28 },
          contentBinding: 'Fulcrum.storyController.arrangedObjects',
          contentValueKey: 'name',
          selectionBinding: 'Fulcrum.storyController.selection',
          showAlternatingRows: YES,
        }),

        detail: SC.View.design({
          layout: { left:210, top:35, right:20 },
          childViews: 'detailContent'.w(),
          detailContent: SC.TemplateView.design({
            templateName: 'storyDetail',
            storyBinding: SC.Binding.single('Fulcrum.storyController.selection')
          })
        }),

        addButton: SC.ButtonView.design({
          classNames: 'actionButton',
          layout: {left:2, bottom:0, height:26, width:30 },
          title: '+',
          isEnabledBinding: 'Fulcrum.currentProjectController.content',
          action: 'addStory',
          target: 'Fulcrum.statechart'
        })
      })
    })
  }),

  loginPane: Fulcrum.LoginPane

});
