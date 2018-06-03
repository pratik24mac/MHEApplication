define([
    'jquery',
    '../utils/EventDispatcher',
    '../utils/util',
    '../component/TabManager',
    './CanvasController'
], function($, EventDispatcher, util, TabManager, CanvasController) {
    'use strict';
    var _instanceApplicationController;

    function ApplicationController() {
        EventDispatcher.call(this);
    }
    util.inherits(ApplicationController, EventDispatcher);
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