# Tests

If you have not **read [concept of writing tests](#/concept-of-writing-tests)**, please do so before reading this section.

**Test should contain only components, methods and other tests.** Exceptionally, you can write if-else conditions or repeats in tests of course. On the other hand, you should definitely avoid using non-elementary actions like "select: button" or "do click". Test should be nices, clean and readable, so that even for your grandma could read them. For all user actions and HTML stuff, use robust component methods - your tests will be much more maintainable. Don't write huge tests, keep them small and simple.

## Run Test From Another Test - prefix "run"

A test can be referenced in another test, just use prefix "run". Same as components, tests can be parametrized by variables. Example of a reusable test would look something like this: log in and as parameters we add an username and a password. 

![](/documentation/images/test_usage.png)

## Visual Editing

Visual Editing mode is turned on by clicking "eye" button. After that, move the cursor towards elements. Components and methods suggestions will appear and will be highlighted.

![](/documentation/images/components_visual_editing.png)

## Running And Debugging Tests

Use "play" and "stop" buttons in right top corner to run and stop a test. For more info visit: **[Running, Debugging And Headless](#/running-debugging-headless)**

## Tests Management

Same as components.

![](/documentation/images/tests_management.png)
