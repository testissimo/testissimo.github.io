# Concept Of Writing Tests

## Tests Componsition

In Testissimo, the test is written as simple, readable and parametrised code, composed from:
1. [Selectors](#/documentation/selectors) - "select: div"
2. [User actions simulation](#/documentation/actions) - "do click"
3. [Assertions](#/documentation/actions) - "assert elements count is: 1"
4. [Repeaters](#/documentation/actions) - "repeat for each value in: 1,2,3"
5. [Components](#/documentation/components-and-methods) - "find button", or "enter panel"
6. [Methods](#/documentation/components-and-methods) - "call button - click"
7. [Tests](#/documentation/tests) - "run login"

## Variables {my first variable}

If you take testing serious, variables are a must. Just use brackets and inside it put variable name. Variables will be auto defined at the beginning of test, when you can add default value. 

TODO: variables usage and definition image

If test, method or component uses variables, they can be overriden when calling this entity from another one. Keep in mind that special variable name "value" is filled as value (after collon).

TODO: image usage variables when calling entity from another one

## Components And Methods - Maintainability Holy Grail

Imagine you have simple html button, that can be found by its text, can be disabled, and is clickable. Now you have 50 tests where you are finding button, asserting enabled/disabled, clicking on it. Let's say 500 times used button. Every time selected by selector. Now developers decide to refactor UI and change all buttons to non-native HTML structure, because they want to add some advanced features, like tooltips, etc... You must go through every button usage in every test and change it ! And that why component-method pattern is genial, you have component button defined in one single place, with methods click and assert enabled/disabled. No matter how will button change, you will update it only in one place. Thats it. Simple and powerful.

TODO: image of button component and his parametrised usage, and changed selector

Components are **Page Object pattern** implementation in very intuitive and easy to use way. To understand the idea behind Page object patter we advise you to read following [article written by Martin Fowler](https://martinfowler.com/bliki/PageObject.html).


## Visual Test Builder - The Magic Of Reverse Filling Variables

As a side effect...

TODO: imge, and finish text

