#If-Else Conditions

- **"if - else if - else"** sequence is used to go through logical expressions (from top to bottom) and check if passed. If the logical expression is true, the code inside will be executed and then skipped to the **"end if"**,
- **If-Else** is a code block, so it always needs to be paired with "end if",
- **Logical checks** are assertions, so all of the assertion actions are available, 
- Use **"not"** as in assertion to define a negative condition, see the image below.

```
select: div

if element(s) count is: 1
	
	#	positive condition
	
	else if element(s) count is greater: 1
		
	#	negative condition
		
	else
	
#	default fallback if none of the previous conditions passed
	
end if
```