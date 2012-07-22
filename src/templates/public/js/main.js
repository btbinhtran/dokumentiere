(function( window ) {
	
	function checkHash() {
		require(['jumpLinks'], function(j) {
			j.enable($('#content a[href^=#]'));
		});
	}
	
	function enableExtended() {
		require(['expander'], function(e) {
			e.extend($('dd.extended .type-object'));
			e.fns($('dd.functions dt'));
		});
	}
	
	require([
		"jquery"
	], function( $ ) {

		var projectInit = {
			immediate: function() {
				$('html').addClass('js-on');
			},

			domReady: function( ctx ) {
				checkHash();
				enableExtended();
			}
		};

		projectInit.immediate();
		$(projectInit.domReady);
	});
}(window, undefined));