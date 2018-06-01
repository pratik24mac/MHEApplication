define([
    'jquery',
    './EventDispatcher'
], function($, EventDispatcher) {
    'use strict';

    function ResourceLoader() {
        EventDispatcher.call(this);
        this.onFileLoaded = onFileLoaded.bind(this);
    }
    ResourceLoader.prototype = Object.create(EventDispatcher && EventDispatcher.prototype);
    ResourceLoader.prototype.constructor = ResourceLoader;

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