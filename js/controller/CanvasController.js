define([
    'pixi',
    '../model/Config',
    '../component/Circle',
    '../component/StaticLayout'
], function(PIXI, Config, Circle, StaticLayout) {
    'use strict';
    var v_sCanvasKey = 'canvasObj',
        v_sStaticLayoutKey = 'staticObj';

    function CanvasController() {
        this.canvasContainerProperty;
        this.staticLayoutProperty;
        this.renderer;
        this._onComponentLoaded = ComponentLoaded.bind(this);
        this.PixiApplication = PIXI.autoDetectRenderer;
        
    }
    CanvasController.prototype.init = function(p_$canvasContainer) {
        this.canvasContainerProperty = Config.getCofig(v_sCanvasKey);
        this.staticLayoutProperty = Config.getCofig(v_sStaticLayoutKey);

        this.renderer = CreateCanvas.call(this);
        p_$canvasContainer.html(this.renderer.view);

        StaticLayout.addEventListener('COMPONENT_DRAW_DONE', this._onComponentLoaded);
        StaticLayout.init(this);
    }

    function CreateCanvas() {
        return new this.PixiApplication(this.canvasContainerProperty);
    }

    function ComponentLoaded() {
        StaticLayout.removeEventListener('COMPONENT_DRAW_DONE', this._onComponentLoaded);
    }

    function ListenForDraw() {
        Circle.addEventListener('DRAW', this._DRAW);
    }


    return CanvasController;
});