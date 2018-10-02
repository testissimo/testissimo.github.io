# Concept Of Writing Tests

## Tests Componsition

In Testissimo, the test is written as simple, readable and parametrised code, composed from:
1. [Selectors](#/documentation/selectors) - "select: div"
2. [User Actions](#/documentation/actions-assertions-and-repeaters), [Assertions](#/documentation/actions-assertions-and-repeaters) and [Repeaters](#/documentation/actions-assertions-and-repeaters) - "do click",  "assert elements count is: 1", "repeat for each value in: 1,2,3" 
3. [Components](#/documentation/components-and-methods) - "find button", or "enter panel"
4. [Methods](#/documentation/components-and-methods) - "call button - click"
5. [Tests](#/documentation/tests) - "run login"

## Variables {my first variable}

If you take testing seriously, variables are a must. Just use brackets and inside it put a variable name. Variables will be auto defined at the beginning of the test, when you can add a default value. 

TODO: variables usage and definition image

If test, method or component uses variables, they can be overridden when calling this entity from another one. Keep in mind that special variable name "value" is filled as value (after the colon).

TODO: image usage variables when calling entity from another one

## Components And Methods - Maintainability Holy Grail

Imagine you have a simple HTML button, that can be found by its text, can be disabled, and is clickable. Now you have 50 tests where you are finding the button, asserting enabled/disabled, clicking on it. Let's say 500 times used button. Every time selected by the selector. Now developers decide to refactor UI and change all buttons to non-native HTML structure, because they want to add some advanced features, like tooltips, etc... You must go through every button usage in every test and change it! And that's why the component-method pattern is so effective. You have component "button" defined in one single place, with methods "click" and "assert enabled/disabled". No matter how will button change, you will update it only in one place. That's it. Simple and powerful.

TODO: image of button component and his parametrised usage, and changed selector

Components are **Page Object pattern** implementation in very intuitive and easy to use way. To understand the idea behind Page object pattern we advise you to read the following [article written by Martin Fowler](https://martinfowler.com/bliki/PageObject.html).

## Components Entering And Leaving

To keep selectors as simple as possible, you can "lock" selectors scope by entering component "enter panel" and inside find another component e.g. "find button". This keeps selectors much simpler, and more HTML design agnostic. See below image to learn how it works.

## Visual Test Builder

Use the "eye" button to activate component visualization. It will show available components at the line where is an active cursor. This helps you visually see current component and test scope. Then you can find or enter component or call his method by clicking on it.

TODO: image
