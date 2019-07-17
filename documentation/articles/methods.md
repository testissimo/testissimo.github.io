# Methods

## About component methods
**Components** describe parts of application, **methods** describe component functionality.

In a method definition, the following can be used:
- variables
- all actions - select, do write, ...   
- other components from the repository - find, enter, leave _component-name_
- methods of components 

## Usage
To use a component method, a component needs to be found (**find _component-name_**) or entered (**enter _component-name_**).

Once a component is found or entered, use the **call** keyword to use a method of the component. 

## Scope
Using component methods will reduce the scope of elements selecting to component's scope. 

To understand scope changes, follow the example with Google Search footer:
1. define an element containing links (i.e. a footer) as a component **_footer_**
2. define a method for asserting the count of links in **_footer_**
3. try selecting all links in the app
4. try to find/enter **_footer_** and call its method for asserting the count of links
5. check the results

<br>
Code snippet for step 1:
```
# component definition
select: #fbar:visible
```
Code snippet for step 2:
```
# method definition
variable count: 

select: a
assert element(s) count is: {count}
```
Code snippet for step 3:
```
# test for selecting all links 
select: a
# click in-between select: and a to see how many links were selected
```
Code snippet for step 4:
```
find footer
call footer - find all links: 
    - count: 7
# the count was estimated by counting links in the footer
    
enter footer
call footer - find all links: 
    - count: 7
```

Step 5:
- 119 links were selected without finding/entering a component
- 7 links were selected in the footer component

## Conclusion
Using methods in Testissimo partly follows Object-oriented programming (i.e. inheritance is omitted). Think of components as objects and component methods as object methods.

Bundling the functionality of application parts with components increases the maintainability of tests. 

**[We recommend reading more about structuring tests, components and methods in the following article](#/documentation/articles/tests)**
