// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	paths : {
		// Major libraries
        jquery : 'libs/jquery/jquery-min',
		underscore : 'libs/underscore/underscore-min', // https://github.com/amdjs
		lodash : 'libs/lodash/lodash', // alternative to underscore
		backbone : 'libs/backbone/backbone-min', // https://github.com/amdjs
        backboneExtendedView:'libs/backbone/backbone.extendedview',
		// Require.js plugins
		text : 'libs/require/text',
		templates : '../templates'
	}

});

// Let's kick off the application

require(['backboneExtendedView', 'jquery', 'router'], function(backboneExtendedView, $, Router) {
	Router.initialize();   // The router now has a copy of all main appview
});
