# Installation

## Browser Support
1. Google Chrome - latest version (old versions are not tested)
2. Mozilla Firefox - latest version (old versions are not tested)
3. Safari - latest version (old versions are not tested) - **limited in browser storage to 5MB, not suitable for large or many repos**
4. Internet Explorer 11 - not tested, some design issues may occur but tests should run
5. Microsoft Edge - not tested, but should work

## Setup Via Browser Plugin
If you dont have access to HTML source or want to have a more comfortable stand-by management mode, we recommend using browser plugins:

1. [Google Chrome plugin](https://chrome.google.com/webstore/detail/testissimo/kbndfdpfemdihkbgpaggicjhmfaeeobh?hl=en )
2. [Mozilla Firefox plugin](https://www.dropbox.com/s/x80m0fzcprgplau/testissimo-0.2.8-an%2Bfx.xpi?dl=1)
3. Internet Explorer 11 - in future
4. Microsoft Edge - in future

## Manual Setup Via HTML Script
Testissimo client is written in JavaScript, so it can be part of your web application. To accomplish this, just insert the script below to the HTML head tag before any other scripts, on every page you want to test:

```html
<script src="https://app.testissimo.io/testissimo-standby.min.js"></script>
```

Testissimo will remain in standby mode (not loaded by the browser). To activate it, place **testissimo=true** somewhere in url, e.g. yourapp.com?testissimo=true or yourapp.com#testissimo=true. 
Activation state remains in session storage, so it stays active until you deactivate it. To do so, just place **testissimo=false** into url.

For better performance, you can download [https://app.testissimo.io/testissimo-standby.min.js](https://app.testissimo.io/testissimo-standby.min.js) script into your app, or copy-paste its content directly into the script tag.

Keep in mind that this script must be in every tested page if your app is not single-page app.
