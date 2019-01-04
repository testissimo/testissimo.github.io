# Setup

## Setup Via Browser Plugin - Recommended
This is preferred setup, because it will auto-setup testissimo script on every page in testissimo app. You can test any website, just turn on plugin and navigate to <a href="http://app.testissimo.io/http" target="_blank">testissimo app</a>.

**Using plugin is safe**, it is active only on app.testissimo.io website. Plugin source is published here [testissimo browser plugins repository](https://github.com/testissimo/testissimo-browser-plugins).

## Browser Support
1. Google Chrome - latest version (old versions are not tested) - plugin available
2. Mozilla Firefox - latest version (old versions are not tested) - plugin available
3. Safari - latest version (old versions are not tested) - **limited in browser storage to 5MB, not suitable for large or many repos** - only embed mode, plugin in future
4. Internet Explorer 11 - not tested, some design issues may occur but tests should run - only embed mode, plugin in future
5. Microsoft Edge - not tested, but should work - only embed mode, plugin in future

## Embeded Setup Via HTML Script
Testissimo client is written in JavaScript, so it can be part of your web application. To accomplish this, just insert the script below to the HTML head tag before any other scripts, on every page you want to test:

```html
<script src="https://app.testissimo.io/testissimo-standby.min.js"></script>
```

Testissimo will remain in standby mode (not loaded by the browser). To activate it, place **testissimo=true** somewhere in url, e.g. yourapp.com?testissimo=true or yourapp.com#testissimo=true. 
Activation state remains in session storage, so it stays active until you deactivate it. To do so, just place **testissimo=false** into url.

For better performance, you can download [https://app.testissimo.io/testissimo-standby.min.js](https://app.testissimo.io/testissimo-standby.min.js) script into your app, or copy-paste its content directly into the script tag.

Keep in mind that this script must be in every tested page if your app is not single-page app.
