define([
    'jquery',
    './EventDispatcher',
    './util'
], function($, EventDispatcher, util) {
    'use strict';

    function ResourceLoader() {
        EventDispatcher.call(this);
        this.onFileLoaded = onFileLoaded.bind(this);
    }
    util.inherits(ResourceLoader, EventDispatcher)

    function loadJSON(p_sUrl, callback) {
        $.ajax({
            type: "GET",
            url: p_sUrl,
            cache: false,
            success: function(response) {
                callback(response);
            }
        });
    }
    ResourceLoader.prototype.load = function(p_sUrl) {
        loadJSON(p_sUrl, this.onFileLoaded);
    }

    function onFileLoaded(response) {
        this.dispatchEvent('FILE_LOADED', {
            type: 'FILE_LOADED',
            target: this,
            data: JSON.stringify(response)
        });
    }

    return ResourceLoader;
})