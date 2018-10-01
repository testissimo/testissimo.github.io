# Installation

## 1. Setup Via Browser Plugin
If you have not access to HTML source, or want to have more comfortable stand-by mode management, we recommend to use browser plugins:

1. Google Chrome [plugin](https://chrome.google.com/webstore/detail/testissimo/kbndfdpfemdihkbgpaggicjhmfaeeobh?hl=en )

2. FireFox [plugin](https://www.dropbox.com/s/x80m0fzcprgplau/testissimo-0.2.8-an%2Bfx.xpi?dl=1)

TODO: plugin images

## 2. Manual Setup Via HTML Script

Testissimo client is written in javascript, so it can be part of your web application, just insert this script to the html HEAD before any other scripts, on every page you want to test:

```javascript
<script src="https://app.testissimo.io/testissimo-standby.min.js"></script>
```

Testissimo will remain in stabd-by mode (not loaded by browser). To activate it, place somewhere in url **testissimo=true**, e.g. yourapp.com?testissimo=true or yourapp.com#testissimo=true. Activation state remains in session storage, so it stays active while you not deactivate it. To do so, just place **testissimo=false** into url.

For better performance, you can download [https://app.testissimo.io/testissimo-standby.min.js](https://app.testissimo.io/testissimo-standby.min.js) script into your app, or copy-paste its content directly into script tag.

Keep in mind that this script must be in every tested page, if your app is not single-page.
