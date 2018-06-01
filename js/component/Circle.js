define([
    '../utils/EventDispatcher',
    '../utils/util',
    'pixi'
], function(EventDispatcher, util, PIXI) {
    'use strict';

    function Circle() {
    	EventDispatcher.call(this);


    }
    Circle.prototype = Object.create(EventDispatcher && EventDispatcher.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.init = function() {
        this.dispatchEvent('CLICK', { type: 'CLICK', target: this });
    }
    function click(){
        this.dispatchEvent('DRAW', { type: 'DRAW', target: this, data : 'Circle' });    
    }
    return Circle;

});