/* USER OVERRIDES */

/* override recipe: enable DRM and let me watch videos ***/
   // user_pref("media.gmp-widevinecdm.enabled", true); // 2021 default-inactive in user.js
   user_pref("media.eme.enabled", true); // 2022

/* override recipe: enable session restore ***/
user_pref("browser.startup.page", 3); // 0102
  // user_pref("browser.privatebrowsing.autostart", false); // 0110 required if you had it set as true
  // user_pref("places.history.enabled", true); // 0862 required if you had it set as false
user_pref("browser.sessionstore.privacy_level", 0); // 1003 [to restore cookies/formdata if not sanitized]
  // user_pref("network.cookie.lifetimePolicy", 0); // 2801 [DON'T: add cookie + site data exceptions instead]
user_pref("privacy.clearOnShutdown.history", false); // 2811
  // user_pref("privacy.clearOnShutdown.cookies", false); // 2811 optional: default false arkenfox v94
  // user_pref("privacy.clearOnShutdown.formdata", false); // 2811 optional
user_pref("privacy.cpd.history", false); // 2812 to match when you use Ctrl-Shift-Del
  // user_pref("privacy.cpd.cookies", false); // 2812 optional: default false arkenfox v94
  // user_pref("privacy.cpd.formdata", false); // 2812 optional

  /* 1601: control when to send a cross-origin referer
 * 0=always (default), 1=only if base domains match, 2=only if hosts match
 * [SETUP-WEB] Breakage: older modems/routers and some sites e.g banks, vimeo, icloud, instagram
 * If "2" is too strict, then override to "0" and use Smart Referer extension (Strict mode + add exceptions) ***/
user_pref("network.http.referer.XOriginPolicy", 0);

user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
   // user_pref("extensions.screenshots.disabled", true); // [FF55+]
   // user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
   // user_pref("reader.parse-on-load.enabled", false); // Reader View

 /* 0801: disable location bar using search 
  * Don't leak URL typos to a search engine, give an error message instead 
  * Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com" 
  * [NOTE] This does not affect explicit user action such as using search buttons in the 
  * dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo) 
  * [SETUP-CHROME] If you don't, or rarely, type URLs, or you use a default search 
  * engine that respects privacy, then you probably don't need this ***/ 
 user_pref("keyword.enabled", true);

/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);

/* 5010: disable location bar suggestion types
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]

/* Others Tweaks */
/* Mouse smoothscrolling */
user_pref("general.smoothScroll.msdPhysics.enabled", true);

/* Forget History (but keep open tabs) */
/* 5013: disable browsing and download history
 * [NOTE] We also clear history and downloads on exit (2811)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history ***/
user_pref("places.history.enabled", false);
