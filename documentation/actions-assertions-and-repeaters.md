# Actions, Assertions And Repeaters

The lowest level of units in Testissimo code are actions. There are 3 types of actions: 
1. Actions - user simulation actions, such as click, keypress, etc...
2. Assertions - value assertions, which will throw exception if not pass, such as. assert elements count, or current url
3. Repeaters - repeats block of code inside repeater

## List Of All Available Actions

![](/documentation/images/actions_list.png)

## Actions (User Simulation) - use "do" prefix

Actions are pretty straightforward, there is no need to describe them standalone. They often need elements selection before, because they are simulating user interaction with none, one or many HTML elements.

![](/documentation/images/action.png)

## Assertions - use "assert" prefix

Assertions checks some part of current state. They are crucial for testing, you should assert any important state change, e.g. if you write text in HTML input, you should check if value in input is correct. Because if HTML input have some mask (phone, email, etc...), it can discart value and be blank again. If assertion doesn't pass it will stop test and throw exception.

![](/documentation/images/assert.png)

## Repeaters - use "repeat" prefix

Repeaters are blocks. It means they have start and end, and inside can be some other code, or another repeater. Currently there is one type of repeat "for each value" in collection of values, by default tab-separated. Inside block there are three very usefull variables:

1. repeat index - iteration index from zero
2. repeat iteration - iteration order, same as index, but starting with 1
3. repeat value - current iteration value

![](/documentation/images/repeat.png)
