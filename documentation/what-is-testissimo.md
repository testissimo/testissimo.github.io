# What Is Testissimo

Testissimo is ent-to-end testing tool for web applications, it can help you with building and running automated tests for web applications. It automates browser from inside, as a part of tested application, not from outside as selenium or another testing tools do. So, everything you need to start testing is browser, no server or client installation required. Testissimo perfectly understand tested app, no more "wait for element" needed, therefore it operates at 100% speed of your browser.

# Testissimo Place In Software Development

### 1. Unit testing
You should allways code unit tests for crucial parts of your application, it should test the smallest unit of your code, such as function, to ensure all input states have corresponding output states, bud keep in mind this does not guarantee that units will play together.

### 2. Integration testing
Never skip testing integrations when important to your project, it can be joined application modules, application connections to database, client (rest APIs) or to other application, because of versioning, hosting, routing, there are many ways how can application be in invalid state, or not working properly in production.

### 3. e2e (end-to-end) testing or UI testing
Testissimo was built for this type of testing, no matter how many unit or integration tests have been passed, when there is no button to log in ;) Main purpose of e2e tests is to click through web UI and satisfy all crucial usage scenarios. Don't let your customers to become UI testers, it can harm your public image, and open ways to your competitors.
