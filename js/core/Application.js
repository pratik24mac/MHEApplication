define([
    '../model/Config',
    '../controller/ApplicationController'
], function(Config, ApplicationController) {
    'use strict';

    var _instanceApplication;

    function Application() {
        this._onConfigLoaded = onConfigLoaded.bind(this);
    }
    Application.prototype.init = function() {
        // Load the "config.json" File
        Config.addEventListener('CONFIG_LOADED', this._onConfigLoaded);
        Config.loadConfig('../data/config.json');
    };

    function onConfigLoaded(e) {
        var oTarget = e.target,
            sType = e.type;
        Config.removeEventListener('CONFIG_LOADED', this._onConfigLoaded);
        createApplicationControllers.call(this);
    }

    function createApplicationControllers() {
        ApplicationController.init();
    }

    if (_instanceApplication === undefined) {
        _instanceApplication = new Application();
    }

    return _instanceApplication;

});