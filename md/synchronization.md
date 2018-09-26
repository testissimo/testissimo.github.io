# Synchronization
Synchronization is important part of writing GUI automation test. The web applications of today are very dynamic and can change their HTML almost any time. In the test tools like Selenium, which don’t have much information about what is happening in the browser you need to handle synchronization by yourself and use wait for element commands to stop test execution until browser updates the page.

In Testissimo, you don’t need to bother about synchronization for most of cases. Testissimo runs in the same browser as the application and has good information about if there are server call which have not yet returned or if the browser is doing some rendering task. That is why Testissimo will always wait, even if you don’t specify it explicitly until the performing the next step. This greatly simplifies the writing the tests and overall maintainability because you don’t need to prolong your waits if running on a slower hardware.

The only cases where you will need to handle synchronization by itself are the cases when even the browser doesn’t know. This are things like server push or when the application uses functions like denounce.
