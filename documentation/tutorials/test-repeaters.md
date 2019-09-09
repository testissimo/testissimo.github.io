#Repeaters
##What will you learn
In this section, you will learn:
- the structure of cycles in Testissimo
- how to use cycles in Testissimo

#Structure of cycles
In Testissimo, cycling through an array of value is done as shown in the code snippet below:
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
You can access these variables just like any other variable.

<!-- TODO: decide if add video of repeater -->