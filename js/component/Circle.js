define([
    'utils/EventDispatcher',
    'utils/util'
], function(EventDispatcher, util) {
    'use strict';

    function Circle() {
    	EventDispatcher.call(this);
        this.color;
        this.texture;

    }
    util._inhreits(Circle, EventDispatcher);
    Circle.prototype.init = function() {
        this.dispatchEvent('CLICK', { type: 'CLICK', target: this });
    }
    return Circle;

});