# Concept Of Writing Tests

## Tests Composition

In Testissimo, the test is written as simple, readable and parametrised code, composed from:
0. [Variables](#/documentation/articles/variables) - declare and (or) define variables (i.e. ```variable username: John```)
1. [Selectors](#/documentation/articles/selectors) - elements selection (i.e. ```select: div```)
2. [User Actions](#/documentation/articles/actions), [Assertions](#/documentation/articles/actions), [if-else Conditions](#/documentation/articles/if-else-conditions), [Repeaters](#/documentation/articles/repeaters) - simulate user interaction and check the outcome (i.e. ```do click```,  ```assert elements count is: 1```, ```repeat for each value in: 1,2,3```) 

<br>and for more maintainable testing:

3. [Components](#/documentation/articles/components) - divide an application into standalone parts and interact with them (i.e. ```find button```, or ```enter panel```)
4. [Methods](#/documentation/articles/methods) - simulate functionality of components (i.e. ```call button - click```)
5. [Tests](#/documentation/articles/tests) - implement repeatable use-cases into tests and reference them in other tests (i.e. ```run login```)

