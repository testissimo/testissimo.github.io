# Write your first test

**In this tutorial you will learn to:**
- Find and open the test you created
- Start writing tests
- Basic shortcuts usage

## Tests Container
In order to start writing your first test, navigate to the **Tests** tab. 

**Complete the steps below:**
1. Navigate to **Home**
2. Select **Repos**
3. Select the Repo you wish to write a test in
4. Select the Test you want to write in

gif about navigating to a concrete test (the test is already created)
 
## Start writing a simple test
<!-- Testissimo makes writing tests quite easy. You will see that code is simple, and follows a logic of you actions and assertions.  -->
**There are two ways to access a web application you will test:**
- Put an *url* of a web application into the **url tab**
- Go to the website, *click* the **Testissimo browser plugin icon** and Testissimo app will activate

## The first test
A simple example of a Testissimo test is asserting Google Search results.
In this example Testissimo will assert the first Google Search result of the "testissimo" search query.

The test structure is shown below:
1. Select the input text field for searching
2. Type in "testissimo"
3. Click the "Google Search" button
4. Select the first result
5. Make sure that this result contains the link to the Testissimo website
<!-- We will guide you through the writing of this test. -->

gif (Google - write Testissimo - search)

**Code:**
```
select: input:visible[type="text"][name="q"][value=""][aria-label="Search"]
do write: Testissimo

select: div.UUbT9 input:visible[name="btnK"][type="submit"][value="Google Search"][aria-label="Google Search"]

do click

select: div:visible[data-hveid]:first
assert element(s) text contains: https://testissimo.io
```

## Additional info
Before you start writing tests, take a notice that you can access list of all the main Actions, Assertions, and Repeaters you can use by a shortcut:

Press **Space** or **Ctrl + Space** (Windows), or **Cmd + Space** (OSX) on your keyboard



