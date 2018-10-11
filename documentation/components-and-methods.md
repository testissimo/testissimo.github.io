# Components And Methods

If you have not **read [concept of writing tests](#/concept-of-writing-tests)**, please do so before reading this section.

## Components And Methods Management

As in all Testissimo resources, you can add, remove or rename components and their methods in the repository resources tab - open it, go to the main tab and click on local repo you want to edit.

![](/documentation/images/components.png)

## Component Definition

Component definition must contain only selector and optional variables definitions. All other actions will throw an error. To get to the  definition screen, click on component name in the list of components. If you write tests via visual editing mode, variables in selector will be suggested (extracted from HTML page). For more information see "extraction" in **[selectors section](#/selectors)**.

![](/documentation/images/component_definition.png)

## Method Definition

In a method definition, you can put any action you want, call other components and their methods. Keep variable names very straightforward with one meaning, it will help others. A method always runs in the context of a component - only within the area defined by the component selector. Selecting input within the component will look for it in inside the component, not the whole page.

![](/documentation/images/method_definition.png)

## Special Variable "value"

If you use a variable {value} in the definition it will be filled in resource usage from after colon value, not as other variables placed behind of hyphen. Look at the usage image below, or try it by yourself in the test, you will understand it better.

## Component And Methods Usage

Use component and methods as often as possible. Your tests should contain only components and methods, no low-level user actions. Your tests should look like this:

![](/documentation/images/components_usage.png)

### Find Component

To use a component in the test, you must find or enter it first. The **"Find"** command only sets the selector to component element(s), so you can make some assertions on it, or iterate through element collection.

### Enter / Leave Component

The **"Enter"** command focuses the content of the component and also locks selectors scope within it. If you want to step outside, use the **"Leave"** component command. **"Leave"** will step out of last entered component identified by its name. If there are multiple components with the same name inside each another, the last (lowest) one will be left.

### Call Component Method

To call a component method, you need to find or enter a component first. If you call a method of a previously found component, no matter where (it can be out of currently entered component scope), this component will be used as a reference and its own method will be executed. In case of multiple entered or found components, the last one will be used.
