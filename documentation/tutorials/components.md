# Components

## What will you learn
In this section, you will learn:
- about the motivation to abstract 
- what components are
- how to use component methods
- how to design your tests and components to achieve maintainable tests

## Why should you use components
Let's say your tests cover 100% of use-cases an app provides. 
Without components, all the elements-selecting and functionality is most likely copied in various places.
Then, at some point developers decide to change the UI of the app. App functionality doesn't change and neither does the content of the app.
In this case, tests need to be rewritten and the reason being all the selecting has to be redone and possibly the funcionality as well.
Such an approach isn't achieving our expectations of maintainability.

Instead, we will now present to you components and methods.

## What are components
In Testissimo, **components** describe parts of the tested application (i.e. headers, content-holders, menus, links, etc...)

To showcase this, we take an example of Google Contacts layout from Vuetify at [this link](https://www.google.com "Google's Contacts at Vuetify") - if you want to follow this example, navigate to this site in the Testissimo app.
The task to carry out is as follows:
_Check if all the links in the side drawer are present._

To carry out this task, we will first create two components: 
- side drawer - left-sided drawer 
- link - in the side drawer
and also **click** and **assert exists** functions.

To define a component, follow the steps below:
1. Navigate to **Repo** overview
2. In the **Components** section, click the **plus** button and suitably name your component 
3. Select the newly created component and write a **selector** for a part of the app 

To implement a component method, follow the steps below:
1. Navigate to **Repo** overview 
2. In the **Components** section, select a component which a method will be linked to
3. Click the **plus** button next to the name of the component
4. Name and implement your function 

To achieve our goal, we now need to: 
- create a Side Drawer component and a more common Link component, 
- define selectors for both components,
- implement assert exists functions
- write a test that will use these components

Follow the code snippets below to complete this task:

### Defining components and implementing methods
**Side drawer**
```
select: aside:visible
```
**Parameterized Link component** 
```
variable link-text: 

select: div:visible.v-list__tile__content:text({link-text})
```
Both of these components also need an **assert exists** method, which is implemented as shown in the code snippet below:
```
assert element(s) count is greater: 0
```

### Using components in testing
Now that we have everything prepared, let's write a test using these components.
We want our test to carry out the following:
1. check if the side-drawer component is present in the app
2. check if all the links are present in the app

Here are some notes before we get to our test:
- use ```find component-name``` to start using a component in a test
- use ```enter component-name``` to focus elements selecting to a component
- use ```leave component-name``` to un-focus elements selecting of a component
- use ```call component-method-name``` to use a method of a component
- keep in mind, that in Testissimo, tests should **ONLY** consist of components and component methods as selectors are meant to be used in component definitions and low-level actions are meant to be used in methods definitions 

The code snippet below wraps our task up:
```
#first we navigate to the desired app
do navigate to url: https://vuetifyjs.com/en/examples/layouts/googleContacts

#firstly, we check if there is a side drawer
find side drawer
call side drawer - assert exists

#then, we focus elements-selecting to this drawer
enter side drawer
	repeat for each value: Contacts	Frequently contacted	Duplicates	Labels	Create label	More	Settings	Send feedback	Help	App downloads	Go to the old version
	#next we assert that a link with specified text exists
	find link: 
		- link-text: {repeat value}
		call link - assert exists	
end repeat
leave side drawer
```