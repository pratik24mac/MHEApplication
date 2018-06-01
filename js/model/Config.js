define([
    '../utils/EventDispatcher',
    '../utils/ResourceLoader',
    '../utils/util'
], function(EventDispatcher, ResourceLoader, util) {
    'use strict';

    var _instanceConfig;

    function Config() {
        EventDispatcher.call(this);

        this.oConfig;

        this._onConfigLoaded = onConfigLoaded.bind(this);
    }
    Config.prototype = Object.create(EventDispatcher && EventDispatcher.prototype);
    Config.prototype.constructor = Config;

    Config.prototype.loadConfig = function(p_sUrl) {
        var oResourceLoader = new ResourceLoader();
        oResourceLoader.addEventListener('FILE_LOADED', this._onConfigLoaded);
        oResourceLoader.load(p_sUrl);
    }

    function onConfigLoaded(e) {
        this.oConfig = JSON.parse(e.data);
        this.dispatchEvent('CONFIG_LOADED', { type: 'CONFIG_LOADED', target: this });
    }

    Config.prototype.getCofig = function(p_sKey) {
        return { p_sKey: this.oConfig[p_sKey] };
    }
    if (_instanceConfig === undefined) {
        _instanceConfig = new Config();
    }

    return _instanceConfig;
})