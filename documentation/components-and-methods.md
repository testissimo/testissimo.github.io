# Components And Methods

In case if you doesn't **read [concept of writting tests](#/contept-of-writting-tests)**, please do so before reading this section.

## Components And Methods Management

As all Testissimo resources, you can add, remove or rename components and their methods in repository resources tab - to open it, go to main tab and click on local repo you want to edit.

![](/documents/images/components.png)

## Component Definition

Component definition must contains only select action, and optional variables definitions. All another actions will produce error. To get there, click on component name in list of components.

Component Selector

![](/documents/images/component_definition.png)

## Method Definition

Component

![](/documents/images/method_definition.png)

## Component And Methods Usage

### Find

To use component in test, you must find or enter it first. Find command only sets selector to component element(s), so you can make some assertions on it, or iterate through element collection.

### Enter - Leave

Enter command will focus inside of component, it will lock selectors scope inside it. If you want to step outside, use leave component command. Leave will step out of last entered component identified by name. If there are multiple components with same name inside each another, it will leave the last (lowest).

### Call Method

To call component method, you need to find or enter component first. If you call method of component found somewhere in above code, no matter where (it can be out of currently entered component scope), it will use it as reference and do execute method as his own. In case multiple entered or find component, the last one will be used.
