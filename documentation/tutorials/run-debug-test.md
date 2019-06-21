## How to Run and Debug Test

**In this tutorial you will learn to:**
> Run and Stop a test
> Deal with errors
> Use a Run method
> Debug a test

## Running a Test
You can **run a Test** or any resource by *clicking* **Play button**. Next to it, there is a **Stop button**, which is useful when the test or UI freezes or if some error stops the test from running. 

When **error** is displayed, the whole Testissimo becomes **read-only**. This enables you to traverse through the source and see a current state of **variables** in the scope, **selectors** and entered **components**. 
- *Click* **Stop** to end this state and make Testissimo editable again
- If the whole run finishes without errors, the **Play** button will ***become green again***
  - Run is done 
 
 ![RunDebug2](https://testissimo.github.io/documentation/images/RunDebug2.png) ![RunDebug2a](https://testissimo.github.io/documentation/images/RunDebug2a.png)

## What is a Run method
**Running component method** is a must while creating or updating the component itself. A component is defined as a simple test, which contains a component selector. Keep in mind that the scope is calculated from the component definition and its default variable values. When the component selector is generic, you should temporarily override default variables or maybe write a whole new selector. 

> In order to keep the original variables aside, use the commenting feature, **"#"**, as a prefix.

## Debuging a Test
### If error occures
When error stops a test, all test runs get frozen and **scope info** shows. This enables you to explore all current **variables**, entered **components** and **selectors**. In the example below, we can see that **Selectors** are resolved, which means that variables are replaced by values and can be edited to check which value to insert if selectors do not select what was meant to be selected.

![debug](https://testissimo.github.io/documentation/images/debug.png)

### Resource Button
Click the **Resource** to observe the lower level of the error to see in what scope the error was thrown:

![debug_child](https://testissimo.github.io/documentation/images/debug_child.png)

 ### Stop Action
Type **"stop"** where you want to stop the run and the error will be generated in the same line. It is a good feature for debugging purposes or when you get confused by what is going on inside a code.

**HINT:**
> Type **"#"** as a prefix for variables in order to keep them aside


