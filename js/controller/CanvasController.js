define([
    'pixi',
    '../model/Config'
], function(PIXI, Config) {
    'use strict';
    var key = 'canvasObj';

    function CanvasController() {
        this.canvasContainerProperty;
        this.PixiApplication = PIXI.Application;
    }
    CanvasController.prototype.init = function(p_$canvasContainer) {
        this.canvasContainerProperty = Config.getCofig(key);
        p_$canvasContainer.html(CreateCanvas.call(this).view) ;
    }

    function CreateCanvas(){
    	return new this.PixiApplication(this.canvasContainerProperty);
    }

    return CanvasController;
});