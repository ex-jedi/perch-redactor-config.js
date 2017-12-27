Perch.UserConfig.redactor = function(){

  var get = function(profile, config, field) {

    return {
      buttons: ['link', 'format','ul', 'bold', 'italic', 'deleted', 'source'  ],
      formatting: ['p', 'h2', 'h3', 'h4'],
      plugins:['source']
     }

    if (config.plugins.indexOf('source') === -1) config.plugins.push('source');

    return config;
  };

  var load = function(cb) {
    if (typeof jQuery.Redactor.prototype.source == 'undefined') {
        jQuery.getScript(Perch.path+'/addons/plugins/editors/redactor-plugins/source.js', cb);
    } else {
      cb();
    }
  };

  return  {
    'get': get,
    'load': load
  }

}();