# Variables

In Testissimo, using variables is simple and straight-forward.

To use a variable, just put a **variable name** in curly brackets (i.e. **{_name_}**). 

Variables can be:
- defined manually - define a variable at the beginning of a test, reuse variables in the code as shown in the example below 
![](/documentation/images/vars_definition.png)
- auto defined -  defined by other entity, such as a test, method or component.  

## Manually defined variables
Use manually defined variables to prevent hard-coded parts. See the example bellow:
```
# this is a example of bad code
# the username "John" is used twice and yet there is no variable used for this purpouse 
run login: 
	- login-name: John
	- login-password: password
	
run assert user info: 
	- username: John
```
A better, more maintainable approach is shown below:
```
# the variable username can be used in the scope of this test
variable username: John

run login: 
	- login-name: {username}
	- login-password: password
	
run assert user info: 
	- username: {username}
```

## Auto-defined variables
This approach is often used for selecting a parameterized component:
```
# code for generic link selecting
variable link-text: 

select: a:text({link-text})
```

or calling a test with multiple auto-defined variables:
```
# login test
variable login-name: 
variable login-password: 

select: #edtSearch:visible
do write: {login-name}

select: #edtSearch:visible
do write: {login-password}
```
```
# calling login test with 2 auto-defined variables
run login: 
	- login-name: {username}
	- login-password: {password}
```
![](/documentation/images/vars_usage.png)


Read more and practise variables in our tutorials : [Variables reusability](#/documentation/documentation-tutorials/variables-reusability) 

## Additional information about variables
If a test, method or component uses variables, used variables can be overridden when called from one entity to another one. Keep in mind that special variable name "value" is filled as value (after the colon).
