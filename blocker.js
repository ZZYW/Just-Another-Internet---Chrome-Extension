var blocklist = [
	    "*://*.nytimes.com/*",
	    "*://*.facebook.com/*",
	    "*://*.bloomberg.com/*",
	    "*://*.aljazeera.com/*",
	     "*://*.tumblr.com/*",
	     "*://*.twitter.com/*",
	     "*://mail.google.com/*",
	     "*://*.youtube.com/*",
	     "*://*.t.co/*",
	     "*://*.google.co.jp/*",
	     "*://*.flickr.com/*",
	     "*://*.vimeo.com/*",
	     "*://*.cbc.ca/*"
    ]

chrome.webRequest.onBeforeRequest.addListener(
	function () {
		return {
			cancel: true
		};
	}, {
		urls: blocklist
	}, ["blocking"]
);

//Adding a Listener to Error Occured Event
chrome.webNavigation.onErrorOccurred.addListener(function (details) {
	
	chrome.tabs.update(details.tabId, {
		url: chrome.extension.getURL("dnserrorpage.html")
	});


});