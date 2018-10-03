# Tests

If you have not **read [concept of writing tests](#/concept-of-writing-tests)**, please do so before reading this section.

**Test should contain only components, methods and other tests.** Exceptionally you can write here if-else conditions or some repeats. But definitely not elementary actions like "select: button" or "do click". Because the test should be nice, clean and readable, even for your grandma. For all the user actions and HTML stuff, use robust component methods - your tests will be much more maintainable. Don't write huge tests, keep them small and simple.

## Run Test From Another Test - prefix "run"

A test can be referenced in another test, just use prefix "run". Same as components they can be parametrized by variables. Example of write reusable test is log in, with a username and password parameter. 

![](/documentation/images/test_usage.png)

## Visual Editing

Turn it on by clicking on "eye" button and then move cursor forward code. You will see components and methods suggestions on current line.

![](/documentation/images/components_visual_editing.png)

## Running And Debugging Tests

Use "play" and "stop" buttons in right top corner to run and stop test. For more info visit: **[Running, Debugging And Headless](#/running-debugging-headless)**

## Tests Management

Same as components.

![](/documentation/images/tests_management.png)
