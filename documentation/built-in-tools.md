# Built-in tools

This is a set of basic build-in actions which can be used to create more complex constructs like component methods. These actions are the Testissimo language which all other component are composed of. 

![](/documentation/images/By-JXGlX9W.png)

Most of the simple action has a CSS selector which defined the html object on which this action will be executed. If the selector is omitted, the selector from owning component or the last selector from previous execution is used. 

As of the current version, the set of Simple actions is given by Testissimo it-self. They do have an undocumented API and thus even custom simple action can be plugged into Testissimo. If you are interested in doing so, please contact the Testissimo development team for further information. 
<br>
## Fill file input

TODO
<br>
## Keyboard (Write / Key press / Focus)

The action has tree variants. It can be used 

* to simulate typing sequence of character on some html object
* to simulate typing single character on some html object
* to focuse some html object
<br>
Following example demonstrates a component method which is writing sequence of character into an INPUT html object

![](/documentation/images/HkYq9UcGX.png)  


<br>
## Mouse click (Left / Middle / Right / Double)

The action simulates click on some html object. The action has four variants depending on which mouse button you want to click and if the click should be single or double. 

The following example demonstrates component method which click on a button identified by its label

![](/documentation/images/rJp9pIqfX.png)  


<br>
## Navigate to (Custom URL, Back, Reload Page)

The action can perform various navigation tasks. It can

* navigate to custom url, which is specified as its parameter
* simulate the back button click
* reload the current page
<br>
The following example demonstrated the navigating the application to some relative path



## ![](/documentation/images/S1bvkv5Gm.png)

 
<br>
## Select option

TODO
<br>
## Wait

The action forces Testissimo to wait for certain amount of time. In clear majority of cases, you will not need to use this action. Testissimo will do most of the synchronization for you. 
<br>
## Extract element values

TODO
<br>
## For each

Using this construct, Testissimo can iterate over some collection and execute some set of actions for each element of that collection. There are various ways how to define the collection. The options are

* Parent component occurrences
* Html elements defined using selector
* Values defined in the semi-colon separated list
* JSON (in the form of array of object)
* Using values in variable which is of type array of objects
<br>
## If – Else

Using this construct, you can implement decision making in Testissimo.The decision can be based 

* on some properties of HTML object
* on count of HTML object
* on the URL parameters
* on the value of some variable
<br>
In the following example, the action check if the variable ‘do-cleanup’ has the value true and if so perform call to some method


![](/documentation/images/rylc-vcG7.png)

 
<br>
## Section

This construct can be used to define some section on the HTML page. This is very like component definition (we encourage you to almost always create component instead of section) with the difference that section cannot have method of its own. Using section, one can fix constant part of CSS selectors for underlying actions. 
<br>
## Select element

TODO
<br>
## Set Variable

Using this command, user can set (or declare and set) some variable which can be later used as a method parameter of for decision making in some if statement. Using this command, user can save some HTML properties if he needs them later in the test to make for example some assertions.
<br>
## Assert Elements

Using this command, user can assert if some HTML elements parameter has a given value. If this condition is not met, Testissimo stops the test execution and related error message is shown. 
<br>
## Assert Elements Count

Using this command user can assert HTML elements count for given CSS Selector. This can also be used to check the existence of some HTML element in the given context.  
In the example below, Testissimo will check if there is exactly one ‘strong’ element within the given ‘Document grid’ component

![](/documentation/images/Sy9sb2nGm.png)  


<br>
## Assert URL

TODO
<br>
## Assert Variable

TODO
