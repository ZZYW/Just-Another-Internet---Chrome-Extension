var on = true;

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

function redirect(arg) {
	return {
		redirectUrl: chrome.extension.getURL("dnserrorpage.html")
	};
}


chrome.webRequest.onBeforeRequest.addListener(
	redirect, //callback function

	{
		urls: blocklist
	}, //filter

	["blocking"]

);

chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
	if (on) {
		chrome.webRequest.onBeforeRequest.removeListener(redirect);
		on = false;
		chrome.browserAction.setIcon({
			path: {
				"38": "icon_37_off.png",
			}
		});
	} else {
		chrome.webRequest.onBeforeRequest.addListener(
			redirect, //callback function

			{
				urls: blocklist
			}, //filter

	["blocking"]

		);
		on = true;
		chrome.browserAction.setIcon({
			path: {
				"38": "icon_37.png",
			}
		});
	}
});