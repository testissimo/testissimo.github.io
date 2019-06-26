# Actions and Assertions 

The lowest level of units in Testissimo code are actions. There are three types of actions: 
1. **Actions** - user simulated actions (i.e. click, keypress, etc...) 
2. **Assertions** - value assertions, which will throw an exception if not passed, such as. _assert element(s) count_
3. **Repeaters** - repeats a block of code inside the repeater

## List Of All Available Actions
To browse the list of all available actions, select the **Actions, Assertions And Repeaters** option in the **Home** tab. 
![](/documentation/images/actions_list.png)

## Actions (User Simulation) - use "do" prefix

Actions are pretty straightforward so there is no need to describe them explicitly. More often than not, actions are linked to selected elements. Thus, element's selection is usually required beforehand.

![](/documentation/images/action.png)

## Assertions - use "assert" prefix

Assertions are checks of the state of an element. 
They are crucial for testing and you should assert any important state change.
If an assertion doesn't pass, an exception will be thrown and Testissimo will become **read-only**
Read more in the **Run and Debug Test** tutorial

For negative assertion, add "not" after prefix, e.g. "assert **not** elements count is: 1"

![](/documentation/images/assert.png)