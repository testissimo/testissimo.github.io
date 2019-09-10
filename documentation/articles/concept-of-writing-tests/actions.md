# Actions

## Basic understanding and usage
To simulate user interaction with an app in Testissimo, we use what's called an **action**.

The ```do``` prefix is used to recognize that an action is about to be invoked. Follow the snippet below to understand how to invoke actions:

```
select: #btnSearch:visible
do click
```
## Types of actions
Considering the need for actions to have element(s) selected before being invoked, actions are divided into:
- no selected elements needed (i.e. ```do navigate to url```, ```do reload page```, ```do wait```) - aren't dependant on having element(s) selected before invoking and can be invoked whenever during the run without causing an error,
- having exactly one selected element (i.e. ```click```, ```write```) - if such action is invoked without having element(s) selected, the test run will stop and throw an error message. 
- having one or more elements selected (```do wait for element(s) exists```)

<br>As an example, the following test will fail. The reason being having too many ```a``` elements selected. To fix this test, increase the selector's specificity so that only one ```a``` element will be selected.  
```
# navigating to Google Search results after searching for "testissimo" 
do navigate to URL: https://www.google.com/search?source=hp&ei=gqElXbb4LITMwQL82bboAQ&q=testissimo

select: a
do click
```

**To read more about all actions - [follow this link for reference.](#/documentation/references/actions-reference)**

## Additional info
Important to mention, in Testissimo, there is a special ```do wait``` action for components.<br>
This action takes a parameter of a number or the **true** keyword.<br>
The need for this special action is that when Shadow DOM is used to generate components, a different waiting process is needed.

Here are some examples of this action applied in component's selectors:

### Wait: true
This approach will load the settings from **Test Run Options**.<br> 
To edit these changes, click the **cog** icon next to the URL field in the navigation bar. <br>
These settings can be changed in the **Settings** tab shown in the picture below:

![](/documentation/images/settings.png)

The code snippet below shows the ```wait``` action being used in a component definition (selecting it) with predefined test run options:
```
# this is a component definition
select: aside.side-drawer
    - wait: true
```
The code snippet below shows the ```wait``` action being used in a component definition (selecting it) with manually defined wait options:
```
select: aside.side-drawer
    - wait: 500
```


