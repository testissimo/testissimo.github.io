# Tests

If you have not **read [Concept of writing tests](#/documentation/documentation/concept-of-writing-tests)**, please do so before reading this article.

## About tests in Testissimo
In Testissimo, tests are meant to describe use-cases. A perfect example of a use-case is logging in. 

Testissimo provides for readable, easily-understanble and most importantly maintainable tests.<br>
In order to achieve this, take a look at the following recommendations:
- **A test should consist only of components, methods and other tests.**
- **Decission-making logic should be done with if-else conditions using tests or methods.**
- **Actions like _select: button_, _do click_, ... should be left out tests. Instead, this logic should be included in component methods instead.**

<br>


## Usage
In the top-right corner of the test container, the following controls are displayed:
- ▶ button - for running a test  
- ■ button - for stopping a test

<br>To reference a test in another test, use the **run _test-name_**. 

Tests, just like methods and component definitions, can be parameterized.

The code snippet below shows an example of a reusable test:
### Input component - definition 
First we need to define a component and its methods
```
variable placeholder-text: Enter Username

select: input[placeholder="{placeholder-text}"]
```
### Input component - _assert component exists_ method
```
variable placeholder-text: Enter Username

select: input[placeholder="{placeholder-text}"]
```
### Input component - _fill_ method
```
variable input-text: 

do write: {input-text}
```
### Next, let's implement the test itself:
```
variable username: 
variable password: 

find input: 
	- placeholder-text: Enter Username
call input - assert component exists
call input - fill: 
	- input-text: {username}
	
find input: 
	- placeholder-text: Enter Password
call input - assert component exists
call input - fill: 
	- input-text: {password}

find button: 
	- button-text: Login
call button - click
```
### Finally to showcase reusability, use this test in another test:
```
run log in: 
	- password: testissimo-user
	- username: password
```

## Visual Editing Mode
Visual Editing Mode is a helpful and straight-forward way of writing and setting tests up. Once all the parts of the application are properly defined as components and their respective functionality is described in component methods, Visual Editing Mode makes it easier for non-IT personnel to compose test. 

To turn on Visual Editing Mode, click the **eye** button.<br> 
Once Visual Editing Mode is turned on, move the cursor across elements. Components and methods suggestions will appear and will be highlighted.

![](/documentation/images/visual_editing_mode.png)

_In the picture above, the **content** component is selected. The **assert heading** component method is displayed as an option for the user to use._

Naturally for programmers, Visual Editing Mode is not preferable. 
<br>Visual Editing Mode is a feature meant for unskilled testers to make testing easier for them.