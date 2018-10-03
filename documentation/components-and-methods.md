# Components And Methods

In case if you doesn't **read [concept of writting tests](#/contept-of-writting-tests)**, please do so before reading this section.

## Components And Methods Management

As all Testissimo resources, you can add, remove or rename components and their methods in repository resources tab - to open it, go to main tab and click on local repo you want to edit.

![](/documentation/images/components.png)

## Component Definition

Component definition must contains only selector and optional variables definitions. All another actions will produce error. To get on definition screen, click on component name in list of components. If you will write tests via visual editing mode, variables in selector will be suggested (extracted from HTML page). For more information see "extraction" in **[selectors section](#/selectors)**.

![](/documentation/images/component_definition.png)

## Method Definition

Put here any action you want, call another components and their methods. Keep variable names very straightforward with one meaning, it will help others. Method will be allways run in context of component - only inside area defined by component selector. So selecting input inside component will search it in inside, not whole page.

![](/documentation/images/method_definition.png)

## Special Variable "value"

If you use variable {value} in definition it will be filled in resource usage from after collon value, not as another variables placed behind of hyphen. Look at the usage image below, or try it by yourself in test, you will understand it better.

## Component And Methods Usage

Use component and methods as often as possible. Your tests should be composed only from components and methods, no low level user actions. Your tests should look like this:

![](/documentation/images/components_usage.png)

### Find Component

To use component in test, you must find or enter it first. Find command only sets selector to component element(s), so you can make some assertions on it, or iterate through element collection.

### Enter / Leave Component

Enter command will focus inside of component, it will lock selectors scope inside it. If you want to step outside, use leave component command. Leave will step out of last entered component identified by name. If there are multiple components with same name inside each another, it will leave the last (lowest).

### Call Component Method

To call component method, you need to find or enter component first. If you call method of component found somewhere in above code, no matter where (it can be out of currently entered component scope), it will use it as reference and do execute method as his own. In case multiple entered or find component, the last one will be used.

## Visual Editing

Turn it on by clicking on "eye" button and than move cursor forward code. You will see components and methods suggestions on current line.

![](/documentation/images/components_visual_editing.png)
