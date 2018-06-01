define([

], function () {
    'use strict';
    
	function EventDispatcher() {
        this.oEvents = {};
        return this;
    }
    EventDispatcher.prototype = {
        constructor: EventDispatcher,
		// ** TODO: Pass custom data
        addEventListener: function (p_key, p_func, p_aArgs) {
            //console.log('$$$ addEventListener() : SCOPE = '+this+' : KEY = '+p_key+' : HAS property = '+this.oEvents.hasOwnProperty(p_key));
            if (this.oEvents && !this.oEvents.hasOwnProperty(p_key)) {
                //console.log('\t$$$ Create NEW array for key "'+p_key+'"');
                this.oEvents[p_key] = [];
            }
            this.oEvents[p_key].push({
				func: p_func, 
				args: p_aArgs
			});
        },
        hasEventListener: function (p_key, p_func) {
            //console.log('$$$ addEventListener() : SCOPE = '+this+' : KEY = '+p_key+' : HAS property = '+this.oEvents.hasOwnProperty(p_key));
            if (this.oEvents && this.oEvents.hasOwnProperty(p_key)) {
                //console.log('\t$$$ Create NEW array for key "'+p_key+'"');
                if (p_func) {
					this.oEvents[p_key].map(function(o, index) {
							return o.func; 
					}).indexOf(p_func);
					/* if (this.oEvents[p_key].indexOf(p_func) !== -1) {
                        return true;
                    } */
                }
                return false;
            }
            return false;
        },
        removeEventListener: function (p_key, p_func) {
			//debugger;
            if (this.oEvents && this.oEvents.hasOwnProperty(p_key)) {
                for (var i in this.oEvents[p_key]) {
                    //console.log('removeEventListener() $$$ '+p_key+' :: '+(this.oEvents[p_key][i] === p_func)+' :: \n\t'+this.oEvents[p_key][i]+'\n\t'+p_func);
                    if (typeof this.oEvents[p_key][i].func === 'function' && this.oEvents[p_key][i].func === p_func) {
                        this.oEvents[p_key].splice(i, 1);
                    }
                }
            }
        },
        removeAllEventListener: function () {
            for (var p_key in this.oEvents) {
                var keyPointer = this.oEvents[p_key];
                for (var i in keyPointer) {
                    //console.log('removeAllEventListener() $$$ '+p_key+' :: Type of Function = '+(typeof this.oEvents[p_key][i] === 'function'));
                    keyPointer.splice(i, 1);
                }
                keyPointer = null;
            }
        },
        dispatchEvent: function (p_key, dataObj) {
            if (this.oEvents && this.oEvents.hasOwnProperty(p_key)) {
                dataObj = dataObj || {};
                dataObj.currentTarget = this;
                //console.log('$$$ dispatchEvent() | '+this.toString()+' : Length = '+this.oEvents[p_key].length);
                var eventKeyCopy = this.oEvents[p_key].slice(0);
                for (var i = 0; i < eventKeyCopy.length; i++) {
                    //console.log('\t$$$ index '+i);
					var oInfo = eventKeyCopy[i];
                    if(typeof(oInfo.func) === "function"){
                        //oInfo.func(dataObj);
						var aArgs = (oInfo.args === undefined) ? [] : oInfo.args;
						aArgs.unshift(dataObj);
						oInfo.func.apply(this, aArgs);
                    }
                };
                /*for (var i in this.oEvents[p_key]) {
                 //console.log('\t$$$ index '+i);
                 this.oEvents[p_key][i](dataObj);
                 }*/
			}
        },

        destroy: function () {
            this.removeAllEventListener();
            this.oEvents = null;
        }

    };

    return EventDispatcher;
});