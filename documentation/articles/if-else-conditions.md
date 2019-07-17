# if-else Conditions

In Testissimo, conditional branching of code can be achieved by using logical checks with **_if-else_** keywords.

Logical checks are assertions, so all of the assertions are available for use. 

Use **_not_** as in assertion to define a negative condition.


To understand conditional branching, take a look at the code snippet below:
```
select: div
if element(s) count is: 1

      # positive outcome

    else if element(s) count is greater: 1

      # negative outcome

    else

  # default fallback if none of the previous conditions passed

end if
```
