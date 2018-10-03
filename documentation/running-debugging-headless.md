# Running, Debugging And Headless

## Run And Stop

To run a test or any resource, simply press "play" button at the right top on the test tab. Near is stop button - it is useful only when test or UI freeze or when error stops running. When showing error, the whole Testissimo is read-only, because you can traverse through the source and see current scope variables, selectors and entered components. Just press stop to end this state and make Testissimo editable.

If the whole run finished without errors, the "play" button remains green - as an indicator that run is done and passed.

## Run Method Definition

Running component definition does not sense because there is the only selector. But running component method is a must while you creating or updating it. Keep in mind that scope is calculated from a component definition and it's default variable values, so when the component selector is generic, you should temporarily override default variables or maybe whole selector. Use commenting feature (hash "#" prefix) to do this if you want to keep original variables aside.

## Debugging

If the test stops on an error, scope info shows and all run is in the frozen state. You can explore all current variables, entered components and selectors. Selectors are resolved, it means variables are replaced by values and can be edited to check what value to insert if selectors do not select what expected.

![](/documentation/images/debug.png)

Click on the resource to get into the lower level of error to see what scope is there.

![](/documentation/images/debug_child.png)

## Stop Action

There is special stop action, just type "stop" where you want to stop run and it will generate an error at this line. It is good for debugging purpose if you do not understand what is going on.

## Headless Run

A headless run is same as the manual run, but there are headless log and report created. You need to pass special parameters to Testissimo via url, when you want to do this.

### Create Headless Url 
By clicking on icon inside tab of resource you want to run headless - often it will be the test suite.

![](/documentation/images/headless_link.png)

Headless url template:  
yourapp.com?testissimo-headless=**USER_APIKEY** | **REPO_ID** | **RESOURCE_ID** | **OPTIONAL_COMMIT_ID_OR_TAG** | **OPTIONAL_RUN_TAG**
* USER_APIKEY - current user API key which will be used to checkout repo, this user must have read access to the repo
* REPO_ID - repository ID
* RESOURCE_ID - a resource ID that will be run
* OPTIONAL_COMMIT_ID_OR_TAG - optional commit ID of commit tag, e.g. latest, release, v1.0, etc... if missing, the latest commit is used
* OPTIONAL_RUN_TAG - optional headless run tag

You can copy-paste this url to the browser, and it will run it in headless mode.

### Headless Browser
Start headless browser with this url and it will do all testing headless. That's all. We strongly recommend using some of our docker images [https://hub.docker.com/u/testissimo](https://hub.docker.com/u/testissimo) where installed browser including testissimo plugin.

### Headless Run Results

Click on the "truck" icon to see headless run results of this resource. Keep in mind that **maximum age of report item is 14 days**, after this period it will be deleted.

![](/documentation/images/headless_results.png)

### Fail Snapshot

By clicking on the snapshot in the results table, you will be redirected to snapshot page. Testissimo is in preview mode to see all scope info as you see while manual running test.

![](/documentation/images/headless_snapshot.png)
