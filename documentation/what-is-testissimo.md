# What Is Testissimo

Testissimo is an end-to-end testing tool for web applications. It helps you with building and running automated tests for web applications. 
As a part of the tested application, Testissimo automates the browser from inside, not from outside as selenium or another testing tools do. So, everything you need to start testing is a browser, no installation required. Testissimo perfectly understands the tested app, so no more "wait for element" needed and therefore it operates at 100% speed of your browser.

# Testissimo's Place In Software Development

### 1. Unit testing
You should always code unit tests for crucial parts of your application. In order to ensure all input states correspond with predefined output states, your tests should test the smallest units of your code, such as functions for example. However, keep in mind that this approach does not guarantee that units will function well together. But then again, that's not what unit testing is about. 

### 2. Integration testing
It's important never to forget or skip integration tests. Otherwise, even in production, you might find your application in an invalid or improperly working state when dealing with joined application modules, application connections to database, client (REST APIs) or to other application, because of versioning, hosting, routing, and many more. 

### 3. e2e (end-to-end) testing or UI testing
Testissimo was built for this type of testing. No matter how many unit or integration tests have passed, when there is no button for the user to log in with ;) The main purpose of e2e tests is to click through web UI and satisfy all crucial usage scenarios. Don't let your customers become UI testers, it will harm your public image and open ways to your competitors.
