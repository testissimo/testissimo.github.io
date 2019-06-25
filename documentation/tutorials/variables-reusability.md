#Test Variables and Reusability

##What will you learn
In this section, you will learn how to:
- declare and define variables,
- use variables.

###Declaring variables
Variables are declared at the start of tests. In Testissimo, variables can be auto-defined or defined manually.

####Manually defined variables
To manually define a variable, use the code snippet below:


```
variable index: 0
```

####Auto-defined defined variables
Auto-defined variables have their values set once called from another entity (i.e. a different test).

The following happens in the code snippet below:
<!-- z tohto spravit video -->
- Test **test1** uses the **index** variable as an auto-defined variable. 
- Test **test2** runs **test1** and sets the **index** value to __0__. 

test1:

```
variable index:
```

test2:

```
run test1: 
	- index: 0
```
<!-- potialto je video -->
Keep in mind that:
- if an entity uses variables, used variables can be overridden once called from one entity to another one,
- special variable named **"value"** is filled as value (after the colon).

###Usage of variables
Using variables in Testissimo is easy and straightforward. 

To use a variable in a test put the **name** of the variable **in curly braces** as is shown in the code snippet below:

```
variable index: 0

select: h3:index({index})
do click
```

The value of a variable can be changed as is shown in the code snippet below:

```
do set variable value: variable value
	- variable: variable name
```