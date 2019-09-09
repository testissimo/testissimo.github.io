# Running, Debugging And Headless

## Run And Stop

To run a test or any resource, simply click the "Play" button in the top-right corner of the Testissimo tab. Right to the "Play" button is the "Stop" button - it is only useful either when the test or the UI freezes or when an error stops the test from running. When displaying an error, the whole Testissimo is read-only. In this way, you can traverse through the source and see current state of variables in the scope, selectors and entered components. Just press "Stop" to end this state and make Testissimo editable again.

If the whole run finishes without errors, the "Play" button will become green again - as an indicator that run is done and passed.

## Run Method Definition

In its core, component defintion is just a simple test, which contains a component selector. Running component method is a must while creating or updating the component itself. Keep in mind that the scope is calculated from the component definition and its default variable values. When the component selector is generic, you should temporarily override default variables or maybe write a whole new selector. In order to keep the original variables aside, use the commenting feature (the hash "#" prefix) to accomplish this.

## Debugging

If an error causes the test to stop, scope info will be shown and all test runs will be frozen. Thanks to this approach, you can explore all current variables, entered components and selectors. Selectors are resolved, which means that variables are replaced by values and can be edited to check what value to insert if selectors do not select what was to be selected.

![](/documentation/images/debug.png)

Click the "Resource" to observe the lower level of the error to see in what scope the error was thrown.

![](/documentation/images/debug_child.png)

## Stop Action

There is special stop action, just type "stop" where you want to stop the run and it will generate an error at this line. It is good for debugging purposes or when you have no clue what is going on.

## Headless Run

Although headless runs work same as the manual runs, there are headless logs and reports generated with running headless. You need to pass special parameters to Testissimo via url, if you want to do this.

### Create Headless Url 
To generate a headless url, click the icon in the middle of the toolbar. You will use this feature often with Test Suites  
![](/documentation/images/headless_link.png)

Headless url template:  
yourapp.com?testissimo-headless=**USER-APIKEY** | **REPO-ID** | **RESOURCE-ID** | **OPTIONAL-COMMIT-ID-OR-TAG** | **OPTIONAL-RUN-TAG**
* USER-APIKEY - current user API key which will be used to checkout repo, this user must have read access to the repo
* REPO-ID - repository ID
* RESOURCE-ID - a resource ID that will be run
* OPTIONAL-COMMIT-ID-OR-TAG - optional commit ID of commit tag, e.g. latest, release, v1.0, etc... if missing, the latest commit is used
* OPTIONAL-RUN-TAG - optional headless run tag

You can copy-paste this url to the browser, and it will run it in headless mode.

### Headless Browser
Start a browser headless with this url and it will do all testing headless. That's all. We strongly recommend using some of our docker images [https://hub.docker.com/u/testissimo](https://hub.docker.com/u/testissimo) where the installed browser includes our Testissimo plugin.

### Headless Run Results

Click on the "truck" icon to see the headless run results of this resource. Keep in mind that **maximum age of report item is 14 days**, as it will be deleted after this period of time .

![](/documentation/images/headless_results.png)

### Fail Snapshot

By clicking the snapshot in the results table, you will be redirected to the Snapshot page. Testissimo is in preview mode to see all the scope info as you see while running tests manually .

![](/documentation/images/headless_snapshot.png)
