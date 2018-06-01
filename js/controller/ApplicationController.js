define([
    'jquery',
    '../utils/EventDispatcher',
    '../component/TabManager',
    './CanvasController'
], function($, EventDispatcher, TabManager, CanvasController) {
    'use strict';
    var _instanceApplicationController;

    function ApplicationController() {
        EventDispatcher.call(this);
    }

    ApplicationController.prototype = Object.create(EventDispatcher && EventDispatcher.prototype);
    ApplicationController.prototype.constructor = ApplicationController;

    ApplicationController.prototype.init = function() {
        var oTabManager = new TabManager(),
            oCanvasController = new CanvasController();
        oTabManager.init($('#tab_container'));
        oCanvasController.init($('.canvas-container'));
    }
    if (_instanceApplicationController === undefined) {
        _instanceApplicationController = new ApplicationController();
    }
    return _instanceApplicationController;
})