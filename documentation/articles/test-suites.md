# Test Suites

Put simply, a test suite is a sequence of tests.<br>
Test suites use the same syntax as any other test.

Running test suites headlessly makes up for brilliant CI management.

## Usage
To run a test suite in another test suite - use the ```execute test-suite-name``` keyword. 

![](/documentation/images/testsuite.png)

A good example of using test suites is checking whether or not a new version of the tested app passed all use-cases.
Testissimo will report any misbehavior, bugs or other unexpected states. 

If a test suite is run headlessly and failing at some test, Testissimo will generate a report.
Such an error report will contain the following:
- reason for the failure - error message just like the ones displayed in the test container once a test fails 
- the current state of DOM - fully traversable and inspectable