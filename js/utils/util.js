define([], function() {
    'use strict'
    var _instanceUtils;
    function Utils() {

    }

    Utils.prototype.inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype);
        subClass.prototype.constructor = subClass;
    }
    if(_instanceUtils === undefined){
        _instanceUtils = new Utils();
    } 
    return _instanceUtils;
})