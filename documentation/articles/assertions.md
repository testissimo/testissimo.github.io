# Assertions

## Basic understanding and usage

A crucial part of testing is **asserting**. In Testissimo, the following can be asserted:
- element attributes and properties - text, class, disabled, visible
- element(s) count 
- URL - current URL, URL text can be validated just like any other text
- variables 

<br>
In Testissimo, for almost every type of assertion, the following is assertable:
- contains - returns true if a substring exists in what's asserted
- starts/ends - self-explanatory 
- lower/greater (+ equal) - used to compare numbers and variables
- regex - typical regex matching 

<br>
**To see all assertions - [follow this link for reference.](#/documentation/documentation-referencies/assertions-reference)**

### Assertions usage
To use an assertion, use the **assert** prefix.<br>

To understand how to use assertions, follow the code snippets below:

```
do navigate to url: https://testissimo.io/
assert url contains: testissimo

do navigate to url: https://www.google.com/search?q=testissimo

# selecting the very first result
select: #rso > div.bkWMgd:first div:visible.r
assert element(s) text contains: Testissimo

# selecting every link that leads to the Testissimo homepage
select: a[href="https://testissimo.io/"]
assert element(s) count is : 1
```
## Error messages
If an assertion doesn't pass, the test run will stop and an error message will be shown.

In the following examples, different kinds of error messages will be displayed after running these tests:

In this code snippet, once the assertion doesn't pass an **informative error message** will be shown:
```
do navigate to url: https://testissimo.io/
assert url contains: testaissimo
```
![](/documentation/images/error-message.png)

In this code snippet, once the assertion doesn't pass a **extended error message** will be shown:
```
do navigate to url: https://www.google.com/search?q=testissimo

select: a[href="https://testissimo.io/"]
assert element(s) count is lower-equal: 0
```
![](/documentation/images/test-error-message.png)

Notice the **Test** button in the bottom-right corner.<br>
Clicking this button will highlight the selected elements.

**To read more about running and debuging tests - [follow this link.](#/documentation/articles/running-debugging-headless)**