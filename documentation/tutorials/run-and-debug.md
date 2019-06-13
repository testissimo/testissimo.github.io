RUN AND STOP
To run a test or any resource, simply click the "Play" button in the top-right corner of the Testissimo tab. Right to the "Play" button is the "Stop" button - it is only useful either when the test or the UI freezes or when an error stops the test from running. When displaying an error, the whole Testissimo is read-only. In this way, you can traverse through the source and see current state of variables in the scope, selectors and entered components. Just press "Stop" to end this state and make Testissimo editable again.
If the whole run finishes without errors, the "Play" button will become green again - as an indicator that run is done and passed.
WHAT IS RUNNING METHOD?
In its core, component defintion is just a simple test, which contains a component selector. Running component method is a must while creating or updating the component itself. Keep in mind that the scope is calculated from the component definition and its default variable values. When the component selector is generic, you should temporarily override default variables or maybe write a whole new selector. In order to keep the original variables aside, use the commenting feature (the hash "#" prefix) to accomplish this.

DEBUG
When error occurs

If an error causes the test to stop, scope info will be shown and all test runs will be frozen. Thanks to this approach, you can explore all current variables, entered components and selectors. Selectors are resolved, which means that variables are replaced by values and can be edited to check what value to insert if selectors do not select what was to be selected.

(pic)

Resource Button
Click the Resource to observe the lower level of the error to see in what scope the error was thrown.
 (pic)
 
 Stop Action
 There is special stop action, just type "stop" where you want to stop the run and it will generate an error at this line. It is good for debugging purposes or when you have no clue what is going on.


