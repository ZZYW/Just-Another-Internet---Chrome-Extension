var on = true;

var blocklist = [
	"*://*.googleapis.com/*",
	"*://*.plus.google.com/*",
	"*://*.sites.google.com/*",
	"*://*.youtube.com/*",
	"*://*.zh.wikipedia.org/*",
	"*://*.twitter.com/*",
	"*://*.blogspot.com/*",
	"*://*.t.co/*",
	"*://*.google.co.jp/*",
	"*://*.instagram.com/*",
	"*://*.xvideos.com/*",
	"*://fc2.com/*",
	"*://*.xhamster.com/*",
	"*://*.pinterest.com/*",
	"*://*.pornhub.com/*",
	"*://*.thepiratebay.se/*",
	"*://*.dailymotion.com/*",
	"*://*.nytimes.com/*",
	"*://*.dropbox.com/*",
	"*://*.vimeo.com/*",
	"*://*.soundcloud.com/*",
	"*://*.slack.com/*",
	"*://*.nicovideo.jp/*",
	"*://*.scribd.com/*",
	"*://*.xing.com/*",
	"*://*.hardsextube.com/*",
	"*://*.drtuber.com/*",
	"*://*.bloomberg.com/*",
	"*://*.wretch.cc/*",
	"*://*.appspot.com/*",
	"*://*.lemonde.fr/*",
	"*://*.lazygirls.info/*",
	"*://*.startpage.com/*",
	"*://*.nrk.no/*",
	"*://*.theepochtimes.com/*",
	"*://*.epochtimes.com/*",
	"*://*.sbs.com.au/chinese/*",
	"*://*.boxun.com/*",
	"*://*.lesoir.be/*",
	"*://*.ntdtv.com/*",
	"*://*.wikileaks.org/*",
	"*://*.allmovie.com/*",
	"*://*.strongvpn.com/*",
	"*://*.purevpn.com/*",
	"*://*.radioaustralia.net.au/chinese/*",
	"*://*.urbansurvival.com/*",
	"*://*.rsf.org/*",
	"*://*.falundafa.org/*",
	"*://*.minghui.org/*",
	"*://*.livestation.com/*",
	"*://*.festival.cultureunplugged.com/*",
	"*://*.twister.net.co/*",
	"*://*.vpncoupons.com/*",
	"*://*.elephantvpn.com/*",
	"*://*.radiovncr.com/*",
	"*://*.waselpro.com/*",
	"*://*.tibet.net/*",
	"*://*.duckduckgo.com/*",
	"*://*.flickr.com/*",
	"*://*.periscope.tv(or pscp.tv)/*",
	"*://*.tumblr.com/*",
	"*://*.thecim.org/*",
	"*://*.slideshare.net/*",
	"*://*.wsj.com/*",
	"*://*.jpl.nasa.gov/*",
	"*://*.mega.nz/*",
	"*://*.disqus.com/*",
	"*://*.reuters.com/*",
	"*://*.instafreebie.com/*",
	"*://*.rfa.org/*",
	"*://*.economist.com/*",
	"*://*.time.com/*",
	"*://*.bigcommerce.com/*",
	"*://*.sluggn.com/*",
	"*://*.ndr.de/*",
	"*://*.greatfire.org/*",
	"*://*.torproject.org/*",
	"*://*.whatsapp.com/*",
	"*://*.pixiv.net/*",
	"*://*.quazr.com/*",
	"*://qz.com/*",
	"*://*.getlantern.org/*",
	"*://*.archive.org/*",
	"*://*.aba.org/*",
	"*://*.mail.google.com/*",
	"*://*.google.com/*",
	"*://*.maps.google.cn/*",
	"*://*.docs.google.com/*",
	"*://*.encrypted.google.com/*",
	"*://*.facebook.com/*",
	"*://*.tw.yahoo.com/*",
	"*://*.hk.yahoo.com/*",
	"*://*.mobile.wikipedia.org/*",
	"*://*.yahoo.co.jp/*",
	"*://*.rakuten.co.jp/*",
	"*://*.amazon.co.jp/*",
	"*://*.isohunt.com/*",
	"*://*.independent.co.uk/*",
	"*://*.yomiuri.co.jp/*",
	"*://*.ustream.tv/*",
	"*://*.excite.co.jp/*",
	"*://*.sponichi.co.jp/*",
	"*://*.nikkeibp.co.jp/*",
	"*://*.technorati.com/*",
	"*://*.plurk.com/*",
	"*://*.pbworks.com/*",
	"*://*.Sony.co.jp/*",
	"*://*.sonymusic.co.jp/*",
	"*://*.openvpn.net/*",
	"*://*.amnesty.org/*",
	"*://*.thetibetpost.com/*",
	"*://*.gaybookstar.com/*",
	"*://*.bbc.co.uk/*",
	"*://*.badoo.com/*",
	"*://*.mendeley.com/*",
	"*://*.sportkin.com/*",
	"*://*.gab.ai/*"
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
		console.log("Icon clicked, turn blocking off")
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
		console.log("Icon clicked, turn blocking on")
		chrome.browserAction.setIcon({
			path: {
				"38": "icon_37.png",
			}
		});
	}
});
