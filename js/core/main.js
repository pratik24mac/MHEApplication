require.config({
    'shim': {
    },
    paths: {
        'jquery': '../libs/jquery.min',
        'pixi' : '../libs/pixi.min'
    },
    'waitSeconds': 30,
	callback: init
});

function init(){
	'use strict';
	require([
		'Application'
	], function(Application) {
		Application.init();
	});
}