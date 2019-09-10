# Concept Of Writing Tests

## Tests Composition

In Testissimo, the test is written as simple, readable and parametrised code, composed from:
1. [Variables](#/documentation/articles/concept-of-writting-tests/variables) - declare and (or) define variables (i.e. ```variable username: John```)
2. [Selectors](#/documentation/articles/concept-of-writting-tests/selectors) - elements selection (i.e. ```select: div```)
3. [User Actions](#/documentation/articles/concept-of-writting-tests/actions), [Assertions](#/documentation/articles/concept-of-writting-tests/assertions), [if-else Conditions](#/documentation/articles/concept-of-writting-tests/if-else-conditions), [Repeaters](#/documentation/articles/concept-of-writting-tests/repeaters) - simulate user interaction and check the outcome (i.e. ```do click```,  ```assert elements count is: 1```, ```repeat for each value in: 1,2,3```) 

<br>and for more maintainable testing:

4. [Components](#/documentation/articles/components) - divide an application into standalone parts and interact with them (i.e. ```find button```, or ```enter panel```)
5. [Methods](#/documentation/articles/methods) - simulate functionality of components (i.e. ```call button - click```)
6. [Tests](#/documentation/articles/tests) - implement repeatable use-cases into tests and reference them in other tests (i.e. ```run login```)

