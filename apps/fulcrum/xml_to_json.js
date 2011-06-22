// ==========================================================================
// Project:   Fulcrum
// Copyright: @2011 Joubert Nel
// ==========================================================================
/*globals Fulcrum */


Fulcrum.xmlToJson = SC.Object.create( /** Fulcrum.XmlToJson.prototype */ {

  transformDescriptions: {
    'PROJECT': {'ID': 'id',
                'NAME': 'name',
                'CURRENT_VELOCITY': 'current_velocity'},

    'STORY': {'ID': 'id',
              'PROJECT_ID': 'project_id',
              'STORY_TYPE': 'story_type',
              'DESCRIPTION': 'description',
              'NAME': 'name',
              'URL': 'url',
              'REQUESTED_BY': 'requested_by',
              'ESTIMATE': 'estimate',
              'CREATED_AT': 'created_at' }
  },
  
  transform: function(xmlNode) {
    var jsonKeyVals;
    var jsonText = '';
    var transform = Fulcrum.xmlToJson.transformDescriptions[xmlNode.nodeName];
    
    if (transform) {
      
      jsonKeyVals = SC.$(xmlNode).contents().toArray().map(function(subElement) {
        var jsonPropertyName = transform[subElement.nodeName];
        if (jsonPropertyName) {
          return '"%@":"%@"'.fmt(jsonPropertyName, subElement.firstChild.nodeValue);
        }
        return null;
      });
      
      jsonText = jsonKeyVals.reduce(function(jsonSoFar, kv) {
        if (!kv) return jsonSoFar;
        return '%@%@%@'.fmt(jsonSoFar, (jsonSoFar.length > 0) ? ',' : '', kv);
      }, '');

    }
    if (jsonText.length === 0) return null;
    return SC.json.decode("{%@}".fmt(jsonText));
  }
});