# Components

This article covers the following:
- components in Testissimo
- components definition 
- components usage

<br>In Testissimo, components define stand-alone parts of a application.<br>
Components can be used to define:
- element composition of an application - header, side-drawer, menus, ...
- a part of an application for more general use in testing - links, buttons, ...

<br>Using components in the correct way will make your tests more maintainable.  

## Component definition
Defining a component consists of the following:
- selecting an element - works just like any other selecting in Testissimo
- providing additional information for selecting an element - declaring parameters for selection, stating the wait parameters ([follow this link for more information](#/documentation/articles/actions))

<br>Note that a component definition should **not** consist of any other logic. 
  
### Simple component definition
```
# defining the toolbar component in the YouTube web application
select: #masthead > #container:visible
```
### Parameterized component definition
```
# defining the button component with auto-definable parameter
variable button-text: 

select: button:text({button-text})
```
Note that the initial value of the parameter can be set in the component definition.<br>
The initial value will be overwritten if any other entity looks for this component with a paramater.<br>

See the code snippets below to understand:
#### Button component definition
```
# defining the button component with auto-definable parameter
variable button-text: default link text

select: button:text({button-text})
```
### Components usage
In Testissimo, components can be used in the following ways:
- ```find component-name``` - Testissimo will look for a component 
- ```enter component-name``` - Testissimo will look for a component and if found reduce to scope of selecting to the component's content 
- ```leave component-name``` - the scope of selecting will be restored

#### ```Find component```
Typically, ```find``` is the first step for calling component methods.<br>
```find component``` does not reduce the scope of selecting. 

**To read more about component methods - [follow this link.](#/documentation/articles/methods)**

```
find button: 
    - button-text: LOG IN
```
#### ```Enter component``` and ```Leave component```
In Testissimo, ```enter  component``` is usually used for reducing a scope of selecting elements to a part of application.<br>
To reverse the ```enter component``` effect, use the ```leave component``` keyword.

```
enter side drawer
    find link: 
        - link-text: {repeat value}
end repeat
```
To practise components and component methods usage - check the **Tutorial > Components** in the Testissimo app.