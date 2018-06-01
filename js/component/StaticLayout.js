define([
    'pixi',
    '../utils/EventDispatcher'
], function(PIXI, EventDispatcher) {
    'use strict';

	var _instanceStaticLayout;
    function StaticLayout() {
        EventDispatcher.call(this);
        this.parentView;
        this.PixiStage = new PIXI.Container();
        this.PixiGraphics = new PIXI.Graphics();
    }
    StaticLayout.prototype = Object.create(EventDispatcher && EventDispatcher.prototype);
    StaticLayout.prototype.constructor = StaticLayout;

    StaticLayout.prototype.init = function(parent_view) {
        this.parentView = parent_view;
        DrawComponent.call(this);
    }

    function DrawComponent() {
        this.PixiGraphics.interactive = true;
        this.PixiGraphics.beginFill(0xe74c3c);
        this.PixiGraphics.drawCircle(100, 100, 40); //drawCircle(x, y, radius);
        this.PixiGraphics.endFill();

        this.PixiGraphics.beginFill(0x9b59b6);
        this.PixiGraphics.drawRect(100, 180, 75, 75); //drawRect(x, y, width, height)
        this.PixiGraphics.endFill();

        this.PixiStage.addChild(this.PixiGraphics);
        this.parentView.renderer.render(this.PixiStage);
        this.dispatchEvent('COMPONENT_DRAW_DONE', { type: 'COMPONENT_DRAW_DONE', target: this });
    }
    if(_instanceStaticLayout === undefined){
    	_instanceStaticLayout = new StaticLayout();
    }
    return _instanceStaticLayout;
})