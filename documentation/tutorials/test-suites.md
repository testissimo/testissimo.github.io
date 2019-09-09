#Test Suites

- are basically sets/lists of tests. 
- can be run from other test suites (use the **execute** prefix + name of the test)
- are managed just like tests from the **Repo** overview   

![Test Suite management](/documentation/images/testsuite-management.png)

##Test Suites in Headless runs
Once an error occurs while running a test suite headlessly, Testissimo won't stop the run. 
Instead, the following will happen:
1. the error will be noted and can be inspected later,
2. the test suite will resume by running the next test.