var blocklist = 
    [
	    "*://*.nytimes.com/*",
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
	     "*://*.cbc.ca/*",
    ]

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: blocklist
    },
    ["blocking"]
);