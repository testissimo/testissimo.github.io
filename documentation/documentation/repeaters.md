# Repeaters

To iterate through an array of values and execute code for each of these values, use the  **repeat for each value** keyword.<br>
To end an iteration, use the **end repeat** keyword.

```
repeat for each value: value1 value2  value3
	
	do some_action
    - autodefined_variable: {repeat-value}
	do some_other_action
    - autodefined_variable: {repeat-value}

end repeat 
```
The **repeat** cycle also provides you with the following variables:
- **{repeat-index}** - iteration index from zero
- **{repeat-iteration}** - iteration order, same as index, starting with 1
- **{repeat-value}** - current iteration value

<br>Accessing the above-mentioned variables works in the same way as with regular variables in Testissimo.
