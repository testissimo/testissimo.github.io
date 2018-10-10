# Concept Of Writing Tests

## Tests Componsition

In Testissimo, the test is written as simple, readable and parametrised code, composed from:
1. [Selectors](#/selectors) - "select: div"
2. [User Actions](#/actions-assertions-and-repeaters), [Assertions](#/actions-assertions-and-repeaters) and [Repeaters](#/actions-assertions-and-repeaters) - "do click",  "assert elements count is: 1", "repeat for each value in: 1,2,3" 
3. [Components](#/components-and-methods) - "find button", or "enter panel"
4. [Methods](#/components-and-methods) - "call button - click"
5. [Tests](#/tests) - "run login"

## Variables {my first variable}

If you take testing seriously, variables are a must. To use a variable, just put a variable name within curly brackets. Variables will be auto defined at the beginning of the test, where you can define variable's default value. 

![](/documentation/images/vars_definition.png)

If a test, method or component uses variables, used variables can be overridden when called from one entity to another one. Keep in mind that special variable name "value" is filled as value (after the colon).

![](/documentation/images/vars_usage.png)

## Components And Methods - Maintainability Holy Grail

Imagine you have a simple HTML button. This button can be identified by its text, can be disabled, and is clickable. Now you have 50 tests and in each of these test you use this button in some way (asserting enabled/disabled, clicking it, hovering it, etc...). Let's say you use this button 500 times across all of your tests. Each time this button is selected by the selector of some sorts. Now developers decide to refactor the UI and change all buttons to non-native HTML structure, because they want to add some advanced features, like tooltips, etc... Now you must go through every button usage in each test and change it! And that's why the component-method pattern is so effective. You have a component "button" defined in one single place, with methods "click" and "assert enabled/disabled". No matter how the button changes, your only deed is to update it in exactly **one** place. That's it. Simple and powerful.

Components are the **Page Object pattern** implementation and are this implementation is done in a very intuitive and easy-to-use way. To understand the idea behind the Page object pattern we advise you to read the following [article written by Martin Fowler](https://martinfowler.com/bliki/PageObject.html).

## Components Entering And Leaving

To keep selectors as simple as possible, you can "lock" selector's scope by entering component "enter panel" and find another component e.g. "find button" within. This keeps selectors much simpler, and more HTML design agnostic. See the image below to learn how it works.

## Visual Test Builder

Use the "eye" button to activate component visualization. It will highlight available components at the line where the active cursor is. This helps you visually see current component and test scope. Then you can find or enter component or call its method by clicking it.

![](/documentation/images/visual_builder.png)
