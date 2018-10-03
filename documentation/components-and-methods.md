# Components And Methods

In case if you have not **read [concept of writing tests](#/contept-of-writing-tests)**, please do so before reading this section.

## Components And Methods Management

As all Testissimo resources, you can add, remove or rename components and their methods in the repository resources tab - open it, go to the main tab and click on local repo you want to edit.

![](/documentation/images/components.png)

## Component Definition

Component definition must contains only selector and optional variables definitions. All another actions will produce error. To get on definition screen, click on component name in list of components. If you will write tests via visual editing mode, variables in selector will be suggested (extracted from HTML page). For more information see "extraction" in **[selectors section](#/selectors)**.

![](/documentation/images/component_definition.png)

## Method Definition

Put here any action you want, call other components and their methods. Keep variable names very straightforward with one meaning, it will help others. A method will be always run in the context of component - only inside the area defined by the component selector. So selecting input inside component will search it in inside, not the whole page.

![](/documentation/images/method_definition.png)

## Special Variable "value"

If you use variable {value} in definition it will be filled in resource usage from after colon value, not as other variables placed behind of hyphen. Look at the usage image below, or try it by yourself in the test, you will understand it better.

## Component And Methods Usage

Use component and methods as often as possible. Your tests should contain only components and methods, no low-level user actions. Your tests should look like this:

![](/documentation/images/components_usage.png)

### Find Component

To use a component in the test, you must find or enter it first. Find command only sets selector to component element(s), so you can make some assertions on it, or iterate through element collection.

### Enter / Leave Component

Enter command will focus inside of the component, it will lock selectors scope inside it. If you want to step outside, use leave component command. Leave will step out of last entered component identified by name. If there are multiple components with the same name inside each another, it will leave the last (lowest).

### Call Component Method

To call a component method, you need to find or enter component first. If you call a method of the component found somewhere in above code, no matter where (it can be out of currently entered component scope), it will use it as a reference and do execute method as his own. In case multiple entered or find component, the last one will be used.
