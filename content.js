//
// Make Facebook Browsable
//

var makeBrowsable = function() {
	// Inject remaining styles
	// This check makes sure the extension works on Chrome and Firefox.
	if (typeof browser === 'undefined') {
		browser = chrome;
	}
	document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + browser.runtime.getURL("facebook.css") + '">');
};

var observer = new MutationObserver(function(mutations){
	mutations.forEach(function(){
		makeBrowsable();
	});
});

var config = {attributes: true};
makeBrowsable();
observer.observe(document.body, config);
