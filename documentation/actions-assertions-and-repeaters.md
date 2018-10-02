# Actions, Assertions And Repeaters

The lowest level of units in Testissimo code are actions. There are 3 types of actions, with action API implementation: 
1. Actions - user simulation actions, such as click, keypress, etc...
2. Assertions - value assertions, which will throw exception if not pass, such as. assert elements count, or current url
3. Repeaters - repeats block of code inside repeater

## List Of All Available Actions

![](/documentation/images/actions_list.png)

## Actions (User Simulation) - use "do" prefix

Actions are pretty straightforward, there is no need to describe them standalone. They often need elements selection before, because they are simulating user interaction with none, one or many HTML elements.

![](/documentation/images/action.png)

## Assertions (User Simulation) - use "assert" prefix

...
